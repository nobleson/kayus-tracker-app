const spawn = require('child_process').spawn,
    config = require('../config/default'),
    cmd = config.rtmp_server.trans.ffmpeg,
    axios = require('axios');


const generateStreamThumbnail = (stream_key) => {
    const args = [
        '-y',
        '-i', 'http://127.0.0.1:8888/live/'+stream_key+'/index.m3u8',
        '-ss', '00:00:01',
        '-vframes', '1',
        '-vf', 'scale=-2:300',
        'thumbnails/'+stream_key+'.png',
    ];

    spawn(cmd, args, {
        detached: true,
        stdio: 'ignore'
    }).unref();
};

const createPageMeta = async(req, res, next) => {
    let route = '';
    route = req.originalUrl;
    let pathname = route.split("/");
    let paths = pathname[2].split("?")
    console.log("singerId",paths[0])
    const singer =  await axios.get('https://media.tivcast.com/api/singer/' + paths[0]);

    if(singer.data){

        let meta = {
            title: `${singer.data.fullname} | Songs Collection`,
            url: `${req.protocol}://${req.get('host')}/singer/${paths[0]}`,
            tags: 'Songs Tiv Tivcast',
            description: singer.data.about,
            image: `${req.protocol}://${req.get('host')}/public/media/images/${singer.data.photo}`
        }
        req.meta = meta
        req.pageStatus = true
    }
    next()

}

module.exports = {
    generateStreamThumbnail : generateStreamThumbnail,
    pageMeta : createPageMeta
};

