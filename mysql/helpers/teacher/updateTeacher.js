const conn = require("../../mysql");

module.exports = function (tid, tname, tage, tsex, callback) {
    let sql = "update teachers set tname='" + tname + "', tage = " + tage + ", tsex = '" + tsex + "' where tid='" + tid + "'";
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