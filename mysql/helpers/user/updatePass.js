const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "update user set password = '" + data.password + "' where uid='" + data.uid + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};