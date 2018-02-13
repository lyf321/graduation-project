const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();
var serve = require('http').createServer(app);
var SkyRTC = require('skyrtc').listen(serve);

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
app.use('/teacher', teacher);
app.use('/student', student);

var server = serve.listen(process.env.PORT || 3000, () => {
    console.log('listening at port %s', server.address().port);
});

server.on('error', function (err) {
    console.log("error")
});
// server.setTimeout(0);
// module.exports = server;

SkyRTC.rtc.on('new_connect', function (socket) {
    console.log('创建新连接');
});

SkyRTC.rtc.on('remove_peer', function (socketId) {
    console.log(socketId + "用户离开");
});

SkyRTC.rtc.on('new_peer', function (socket, room) {
    console.log("新用户" + socket.id + "加入房间" + room);
});

SkyRTC.rtc.on('socket_message', function (socket, msg) {
    console.log("接收到来自" + socket.id + "的新消息：" + msg);
});

SkyRTC.rtc.on('ice_candidate', function (socket, ice_candidate) {
    console.log("接收到来自" + socket.id + "的ICE Candidate");
});

SkyRTC.rtc.on('offer', function (socket, offer) {
    console.log("接收到来自" + socket.id + "的Offer");
});

SkyRTC.rtc.on('answer', function (socket, answer) {
    console.log("接收到来自" + socket.id + "的Answer");
});

SkyRTC.rtc.on('error', function (error) {
    console.log("发生错误：" + error.message);
});