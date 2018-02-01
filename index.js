const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./public'));

const user = require("./mysql/routers/user");
const course = require("./mysql/routers/course");
const teacher = require("./mysql/routers/teacher");
const student = require("./mysql/routers/student");

app.all('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public'));
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods:OPTIONS, GET, POST')
});

app.use('/user', user);
app.use('/course', course);
app.use('/teacher',teacher);
app.use('/student',student);


var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;