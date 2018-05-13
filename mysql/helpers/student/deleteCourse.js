const conn = require("../../mysql");

module.exports = function (data, callback) {
    console.log(data)
    let sql = "delete from stu_cour where cid='" + data.cid + "' and sid = '" + data.sid + "'";
    let sql2 = "update courses set clock = "+0+" where cid = '"+data.cid+"'"
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            conn.query(sql2, function (err, results, fields) {
                if (err) {
                    console.log("错误");
                    callback({status: 0});
                    // throw err;
                } else {
                    callback({status: 1});
                }
            });
        }
    });
};