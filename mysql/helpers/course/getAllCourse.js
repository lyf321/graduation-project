/**
 * Created by liyangfan on 18-1-27.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "SELECT courses.cid,courses.cname,courses.cintroduce,courses.ctype," +
        "courses.cproperty,teachers.tid,teachers.tname " +
        "FROM courses,teachers where teachers.tid=courses.tid";
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