const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "select * from students,courses,stu_cour,evaluations where courses.tid = '" + data.tid +
        "' and evaluations.tid = courses.tid and stu_cour.sid = students.sid and " +
        "students.sid = evaluations.sid and courses.cid = stu_cour.cid and evaluations.cid = stu_cour.cid";

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