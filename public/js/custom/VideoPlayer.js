


var VideoPlayer = (function() {
    'use strict';
    var _video_state = {
        stream: false,
        videoJsOptions: null
    }
    return{
        set(video_state){
            _video_state = video_state
        },
        get(){
            return _video_state
        },
        async  getUser(username) {  
            const options = {
              url: '/user',
              params: {username: username},
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };
           return await axios(options);
          }
    
    }
})();