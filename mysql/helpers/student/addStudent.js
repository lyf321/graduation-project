const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "insert into students values ('" + data.sid + "','" +
        data.sname + "'," + data.sage + ",'" + data.ssex + "','" +
        data.semail + "','" + data.saddress + "','" + data.snumber + "','../upload/avatar/1.png')";
    let sql2 = "insert into user values('" + data.sid + "','" + data.sid + "','123456',3)";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
            throw err;
        } else {
            conn.query(sql2, function (err, results, fields) {
                if (err) {
                    console.log("错误");
                    callback({status: 0});
                    throw err;
                } else {
                    callback({status: 1});
                }
            });
        }
    });
};