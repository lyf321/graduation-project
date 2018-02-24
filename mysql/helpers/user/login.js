/**
 * Created by liyangfan on 18-1-24.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "SELECT * FROM user WHERE username = '" + data.username + "' AND password = '" + data.password + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            if (results.length > 0) {
                callback({result: results, status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
};