const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "SELECT * FROM courses,teachers,stu_cour,students " +
        "where courses.cid = '" + data.search + "' and courses.cid = stu_cour.cid and stu_cour.sid = students.sid and teachers.tid=courses.tid";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
            callback({status: 0});
        } else {
            if (results.length > 0) {
                callback({results: results, status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
};