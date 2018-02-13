/**
 * Created by liyangfan on 18-1-22.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {
    console.log(data)
    let sql = "insert into user values('" + data.uid + "','" + data.username + "','" + data.password + "',3)";
    let sql2 = "insert into students (sid,sname,sage,ssex,savatar) values ('" + data.uid + "','" +
        data.name + "'," + data.age + ",'" + data.sex + "','../upload/avatar/1.png');";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            throw err;
        } else {
            if (results) {
                conn.query(sql2, function (err, results, fields) {
                    if (err) {
                        console.log("错误");
                        throw err;
                    } else {
                        if (results) {
                            callback({status: 1});
                        } else {
                            callback({status: 0});
                        }
                    }
                });
            } else {
                callback({status: 0});
            }
        }
    });
};