const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "update students set sname='" + data.sname + "', sage = " +
        data.sage + ", ssex = '" + data.ssex + "' where sid='" + data.sid + "'";
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