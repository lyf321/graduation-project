const conn = require("../../mysql");

module.exports = function (tid, callback) {
    let sql = "delete from teachers where tid='" + tid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};