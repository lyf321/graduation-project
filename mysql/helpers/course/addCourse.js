const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "insert into courses values ('" + data.cid + "','" + data.cname + "','" + data.tid + "','" + data.cintroduce +
        "','" + data.ctype + "','" + data.cproperty + "','" + data.ctime + "',0,'2','" + data.ctimeRange + "')";
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