const request = require('postman-request')

const getData = (callback) => {
    request('./utils/data.json'), (error, res, body) => {
        if(error){
          console.log('Error', error)  
          return callback(error, undefined);
        }
        if (res){
            if(body){
               return callback(undefined, body);
            }
            callback("Data not found.", undefined);
        }
    };
}

module.exports = {
    getData
}