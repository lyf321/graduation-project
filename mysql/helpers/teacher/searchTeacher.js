const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql1 = "SELECT * FROM teachers where tid = '" + data.search + "'";
    let sql2 = "SELECT * FROM teachers where tname = '" + data.search + "'"
    conn.query(sql1, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            if (results.length > 0) {
                console.log(results);
                callback({results: results, status: 1});
            } else {

                conn.query(sql2, function (err, results, fields) {
                    if (err) {
                        console.log("错误");
                        callback({status: 0});
                    } else {
                        if (results.length > 0) {
                            console.log(results);
                            callback({results: results, status: 1});
                        } else {
                            console.log(results);
                            callback({status: 0});
                        }
                    }
                });
            }
        }
    });
};