var StreamKey = (function() {
    'use strict';
    return{
        async  read() {  
            const options = {
              url: '/settings/stream_key',
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };
           return await axios(options);
          },
          async  create() {  
            const options = {
              url: '/settings/stream_key',
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              }
            };
           return await axios(options);
          }
    }
})();