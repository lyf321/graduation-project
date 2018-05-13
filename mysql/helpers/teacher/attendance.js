const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "insert into attendance values('"+data.tid+"','"+data.month+"','"+data.year+"','"+data.day+"')";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
            // throw err;
        } else {
            callback({result: results, status: 1});
        }
    });
};