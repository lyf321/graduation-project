const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "delete from stu_cour where cid='" + data.cid + "' and sid = '" + data.sid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};