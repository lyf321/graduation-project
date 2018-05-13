/**
 * Created by liyangfan on 18-5-8.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "SELECT * from attendance where tid = '" + data.tid + "'and month = '" + data.month + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            // throw err;
        } else {
            if (results.length > 0) {
                callback({results: results, status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
};