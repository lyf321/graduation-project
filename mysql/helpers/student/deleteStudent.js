const conn = require("../../mysql");

module.exports = function (sid, callback) {
    let sql = "delete from students where sid='" + sid + "'";
    let sql2 = "delete from user where uid = '" + sid + "'";

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