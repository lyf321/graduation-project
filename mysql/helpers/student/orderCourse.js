const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "insert IGNORE into stu_cour values ('" + data.sid + "','" + data.cid +
        "',"+0+",'"+data.orderTime+"')";
    let sql2 = "update courses set clock = "+1+" where cid = '"+data.cid+"'"
    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
            // throw err;
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