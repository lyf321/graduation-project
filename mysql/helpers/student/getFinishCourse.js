const conn = require("../../mysql");

module.exports = function (data, callback) {

    // let sql = "SELECT stu_cour.cid,stu_cour.sid,courses.tid,courses.cname from courses,stu_cour where courses.cid in " +
    //     "(SELECT stu_cour.cid,stu_cour.sid from stu_cour where stu_cour.sid = '" + data.user + "' && stu_cour.finish = 1)";

    let sql1 = "select * from stu_cour where stu_cour.finish = 1";
    conn.query(sql1, function (err, results, fields) {
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