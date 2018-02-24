const conn = require("../../mysql");

module.exports = function (filepath, sid, callback) {

    let sql = "update teachers set tavatar = '" + filepath + "' where tid='" + sid + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};