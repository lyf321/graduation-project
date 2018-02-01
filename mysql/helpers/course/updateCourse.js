const conn = require("../../mysql");

module.exports = function (cid, tid, callback) {
    let sql = "update courses set tid='" + tid + "' where cid='" + cid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};