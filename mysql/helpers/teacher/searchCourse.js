const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "select * from courses where cid in (" +
        "SELECT cid FROM stu_cour where stu_cour.cid in ( " +
        "select cid from courses where tid = '" + data.tid + "'))";

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
}