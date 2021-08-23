const request = require('postman-request');

const getData = (callback) => {
    request('./', (err, res, body) => {
        if(err) {
            return callback(err, undefined);
        }
        if(res) {
            if(body) {
                const JSONBody = JSON.parse(body);
                return callback(undefined, JSONBody);
            } else {
                return callback('Users not found', undefined);
            }
        }
    });
}

module.exports = {
    getUsers
}