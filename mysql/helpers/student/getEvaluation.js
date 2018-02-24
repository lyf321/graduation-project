const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "select courses.cname,teachers.tname,evaluations.evaluation,evaluations.suggestion from " +
        "courses,teachers,evaluations where courses.cid = evaluations.cid and teachers.tid = evaluations.tid " +
        "and evaluations.sid = '" + data.sid + "'";
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