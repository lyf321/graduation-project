const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "insert into courses values ('" + data.cid + "','" + data.cname + "','" + data.tid + "','" + data.cintroduce +
        "','" + data.ctype + "','" + data.cproperty + "')";
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};