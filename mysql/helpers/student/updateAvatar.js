const conn = require("../../mysql");

module.exports = function (filepath, sid, callback) {
    console.log(filepath, sid)
    let sql = "update students set savatar = '" + filepath + "' where sid='" + sid + "'";

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