var Visit = (function() {
    'use strict';

    return {
      async  read(url = '') {  
        const options = {
          url: url,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }
        };
       return await axios(options);
      },
      async  update(url = '') {  
        const options = {
          url: url,
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
        };
       return await axios(options);
    },

    }
  }());
