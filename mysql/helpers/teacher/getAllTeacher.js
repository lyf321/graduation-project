const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "SELECT * from teachers";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
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
};