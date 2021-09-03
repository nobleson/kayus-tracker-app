var LiveStreams = (function() {
    'use strict';
    var _live_streams = []
    return{
        set(live_streams){
            _live_streams = live_streams
        },
        get(){
            return _live_streams
        },
        async  getLiveStreams() {  
            const options = {
              url: '/api/streams',
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };
           return await axios(options);
          },
        async getStreamsInfo(live_streams) {
           await axios.get('/streams/info', {
                params: {
                    streams: live_streams
                }
            }).then(res => {
                this.set({
                    live_streams: res.data
                }, () => {
                    console.log(this.get());
                });
            });
        }
    
    }
})();