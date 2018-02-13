const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "insert into teachers(tid,tname,tage,tsex,temail,taddress,tnumber,tavatar) values ('" + data.tid + "','" +
        data.tname + "'," + data.tage + ",'" + data.tsex + "','" +
        data.temail + "','" + data.taddress + "','" + data.tnumber + "','../upload/avatar/1.png')";

    let sql2 = "insert into user values('" + data.tid + "','" + data.tid + "','123456',2)";

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