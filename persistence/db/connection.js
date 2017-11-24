// connector.js
var mysql = require('mysql');
var conf = require('../../config/db')['TEST'];

var pool = mysql.createPool(conf);

var query = function(sql, param, cb) {
    pool.query(sql, param, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        if (cb) {
            cb(err, result, fields);
        }
    });
};

// var sql = require('../db/sql.js')['USER']
// query(sql['register'], ['2', '2', '2'], function(err, result, fields){
//     console.log(result);
// });

module.exports = query;