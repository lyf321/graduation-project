const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "update teachers set tname='" + data.tname + "', tage = " +
        data.tage + ", tsex = '" + data.tsex + "', temail = '" + data.temail +
        "', taddress = '" + data.taddress + "', tnumber = '" + data.tnumber + "' where tid='" + data.tid + "'";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};