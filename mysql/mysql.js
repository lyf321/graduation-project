var mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "lyf123456",
    database: 'users',
    port: 3306
});