const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "select * from students,courses,stu_cour where courses.tid = '" + data.tid +
        "' and stu_cour.sid = students.sid and courses.cid = stu_cour.cid";

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