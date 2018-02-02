const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "insert into teachers values ('" + data.tid + "','" +
        data.tname + "'," + data.tage + ",'" + data.tsex + "')";
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