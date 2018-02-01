const conn = require("../../mysql");

module.exports = function (data, callback) {
    console.log(data.search)
    let sql1 = "SELECT courses.cid,courses.cname,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.cid = '" + data.search + "' and teachers.tid=courses.tid";
    let sql2 = "SELECT courses.cid,courses.cname,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.cname = '" + data.search + "' and teachers.tid=courses.tid";
    let sql3 = "SELECT courses.cid,courses.cname,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.tid = '" + data.search + "' and teachers.tid=courses.tid";

    conn.query(sql1, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            if (results.length > 0) {
                console.log(results);
                callback({results: results, status: 1});
            } else {

                conn.query(sql2, function (err, results, fields) {
                    if (err) {
                        console.log("错误");
                        callback({status: 0});
                    } else {
                        if (results.length > 0) {
                            console.log(results);
                            callback({results: results, status: 1});
                        } else {

                            conn.query(sql1, function (err, results, fields) {
                                if (err) {
                                    console.log("错误");
                                    callback({status: 0});
                                } else {
                                    if (results.length > 0) {
                                        console.log(results);
                                        callback({results: results, status: 1});
                                    } else {
                                        console.log(results);
                                        callback({status: 0});
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
};