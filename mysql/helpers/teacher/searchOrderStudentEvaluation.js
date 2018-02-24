const conn = require("../../mysql");

module.exports = function (data, callback) {


    let sql = "select students.sid,students.sname,courses.cid,courses.cname,courses.tid," +
        "evaluations.evaluation,evaluations.suggestion from students,courses,evaluations " +
        "where courses.cid=evaluations.cid and students.sid=evaluations.sid  and" +
        " courses.tid=evaluations.tid and evaluations.tid = '"+data.tid+"'"

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