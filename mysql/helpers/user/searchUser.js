const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql1 = "SELECT * FROM user where uid = '" + data.search + "'";

    if (data.search === "") {
        let sql = "SELECT * from user";
        conn.query(sql, function (err, results, fields) {
            if (err) {
                console.log("错误");
                callback({status: 0});
            } else {
                if (results.length > 0) {
                    callback({results: results, status: 1});
                } else {
                    callback({status: 0});
                }
            }
        });
    } else {
        conn.query(sql1, function (err, results, fields) {
            if (err) {
                console.log("错误");
                callback({status: 0});
            } else {
                if (results.length > 0) {
                    callback({results: results, status: 1});
                } else {
                    callback({status: 0});
                }
            }
        });
    }
}