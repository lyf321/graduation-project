const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "update evaluations set evaluation = '" + data.evaluation + "',suggestion = '" +
        data.suggestion + "' where cid = '" + data.cid + "' and sid = '" + data.sid + "' and tid = '" + data.tid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
            throw err;
        } else {
            callback({status: 1});
        }
    });
};