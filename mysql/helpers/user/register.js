/**
 * Created by liyangfan on 18-1-22.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {
    console.log("")
    let sql = "SELECT * FROM user3 WHERE username = '" + data.username + "' AND password = '" + data.password + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            if (results) {
                callback({status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
};