const conn = require("../../mysql");

module.exports = function (sid, callback) {
    let sql = "delete from students where sid='" + sid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};