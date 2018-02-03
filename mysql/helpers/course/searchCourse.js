const conn = require("../../mysql");

module.exports = function (data, callback) {
    let sql1 = "SELECT courses.cid,courses.cname,courses.cintroduce,courses.ctype," +
        "courses.cproperty,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.cid = '" + data.search + "' and teachers.tid=courses.tid";

    let sql2 = "SELECT courses.cid,courses.cname,courses.cintroduce,courses.ctype," +
        "courses.cproperty,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.cname like '%" + data.search + "%' and teachers.tid=courses.tid";

    let sql3 = "SELECT courses.cid,courses.cname,courses.cintroduce,courses.ctype," +
        "courses.cproperty,teachers.tid,teachers.tname FROM courses,teachers " +
        "where courses.tid = '" + data.search + "' and teachers.tid=courses.tid";

    let sql4 = "SELECT courses.cid,courses.cname,courses.cintroduce,courses.ctype," +
        "courses.cproperty,teachers.tid,teachers.tname " +
        "FROM courses,teachers where teachers.tid=courses.tid";

    conn.query(sql1, function (err, results, fields) {
        if (err) {
            console.log("错误");
            callback({status: 0});
        } else {
            if (results.length > 0) {
                callback({results: results, status: 1});
            } else {

                conn.query(sql2, function (err, results, fields) {
                    if (err) {
                        console.log("错误");
                        callback({status: 0});
                    } else {
                        if (results.length > 0) {
                            callback({results: results, status: 1});
                        } else {

                            conn.query(sql3, function (err, results, fields) {
                                if (err) {
                                    console.log("错误");
                                    callback({status: 0});
                                } else {
                                    if (results.length > 0) {
                                        callback({results: results, status: 1});
                                    } else {
                                        conn.query(sql4, function (err, results, fields) {
                                            if (err) {
                                                console.log("错误");
                                                callback({status: 0});
                                            } else {
                                                if (results.length > 0) {
                                                    callback({results: results, status: 1});
                                                } else {
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
            }
        }
    });
};