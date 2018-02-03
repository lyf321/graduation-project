const conn = require("../../mysql");

module.exports = function (cid, tid, ctype, cintroduce, cproperty, callback) {
    let sql = "update courses set tid='" + tid + "', cintroduce='" + cintroduce +
        "',cproperty='" + cproperty + "', ctype='" + ctype + "' where cid='" + cid + "'";
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