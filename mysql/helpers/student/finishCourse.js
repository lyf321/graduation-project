/**
 * Created by liyangfan on 18-5-9.
 */
const conn = require("../../mysql");

module.exports = function (data, callback) {

    let sql = "update stu_cour set finish = " + 1 + " where sid='" + data.sid + "' && cid = '" + data.cid + "'";

    conn.query(sql, function (err, results, fields) {
        if (err) {
            console.log("错误");
            // throw err;
            callback({status: 0});
        } else {
            callback({status: 1});
        }
    });
};