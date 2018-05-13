/**
 * Created by liyangfan on 18-5-9.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "SELECT * from evaluationCourse where cid = '" + data.cid + "' and tid = '" + data.tid + "'"
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            if (results.length > 0) {
                callback({results: results, status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
};