/**
 * Created by liyangfan on 18-2-6.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "SELECT * from courses where courses.cid in " +
        "(SELECT stu_cour.cid from stu_cour where stu_cour.sid = '" + data.user + "')";
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