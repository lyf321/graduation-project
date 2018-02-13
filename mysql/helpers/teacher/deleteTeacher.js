const conn = require("../../mysql");

module.exports = function (tid, callback) {
    let sql = "delete from teachers where tid='" + tid + "'";
    let sql2 = "delete from user where uid = '" + tid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            conn.query(sql2, function (err, results, fields) {
                if (err) {
                    console.log("错误");
                    callback({status: 0});
                } else {
                    callback({status: 1});
                }
            });
        }
    });
};