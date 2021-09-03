const express = require('express'),
    path = require('path'),
    bodyParse = require('body-parser'),
    //passport = require('./auth/passport'),
    pageFilter = require('./helpers/helpers'),
    Session = require('express-session'),
    MongoStore = require('connect-mongo')(Session);
    mongoose = require('./database/mongoose'),
    middleware = require('connect-ensure-login'),
    config = require('./config/default'),
    flash = require('connect-flash'),
    cors = require('cors'),
    axios = require("axios"),
    fs = require('fs'),
    app = express();


const port = 8181
const connection = mongoose.db

app.use(cors())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('./public'));
app.use('/thumbnails', express.static( path.join(__dirname, './thumbnails')));
//app.use(flash());
app.use(require('cookie-parser')());
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json({extended: true}));
//app.use('/public/media/images/', express.static('/home/tivcast/imagebucket/'))
//app.use('/public/media/audio/', express.static('/home/tivcast/music/audio/'))
//app.use('/public/media/video/', express.static('/home/tivcast/music/video/'))

const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })

app.use(Session({
    secret: config.server.secret,
    resave: true,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      path: '/',
     // secure: (process.env.NODE_ENV == 'production')? true : false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));
  



/* app.use(passport.initialize());
app.use(passport.session());
 */
// Register app routes

app.use('/api/call', require('./routes/Call'));



app.get('/', (req, res) => {
    res.send('<!doctype html>\n<html lang="en">\n' +  
    '\n<meta charset="utf-8">\n<title>Kayus Call API</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>RESTful API for Call Logging</h1>\n' + 
    '\n\n');
});


app.listen(port, () => {
    console.log(`App listening on ${port}!`)
});
//liquidsoap.start()
