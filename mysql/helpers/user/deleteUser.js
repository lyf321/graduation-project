const conn = require("../../mysql");

module.exports = function (uid, callback) {
    let sql = "delete from user where uid='" + uid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};