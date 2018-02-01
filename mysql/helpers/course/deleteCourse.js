const conn = require("../../mysql");

module.exports = function (cid, callback) {
    let sql = "delete from courses where cid='" + cid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};