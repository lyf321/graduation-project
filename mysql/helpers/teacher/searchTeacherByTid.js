const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "SELECT * FROM teachers,user where user.uid = '" + data.tid + "' and teachers.tid = '" + data.tid + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
        } else {
            if (results.length > 0) {
                callback({results: results, status: 1});
            } else {
                callback({status: 0});
            }
        }
    });
}