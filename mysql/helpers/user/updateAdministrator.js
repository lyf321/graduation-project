const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql = "update administrator set name='" + data.name + "', age = " +
        data.age + ", sex = '" + data.sex + "', email = '" + data.email +
        "', address = '" + data.address + "', phone = '" + data.number + "' where uid='" + data.sid + "'";
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