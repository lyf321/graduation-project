const express = require('express');
let multipart = require("connect-multiparty");
const Router = express.Router();
let fs = require("fs");
const path = require('path');

const getAllStudent = require("../helpers/student/getAllStudent");
const updateStudent = require("../helpers/student/updateStudent");
const deleteStudent = require("../helpers/student/deleteStudent");
const addStudent = require("../helpers/student/addStudent");
const searchStudent = require("../helpers/student/searchStudent");
const getCourse = require("../helpers/student/getCourse");
const deleteOrderCourse = require("../helpers/student/deleteCourse");
const searchStudentBySid = require("../helpers/student/searchStudentBySid");
const orderCourse = require("../helpers/student/orderCourse");
const getAvater = require("../helpers/student/getAvater");
const getEvalulation = require("../helpers/student/getEvaluation");
const updateAvatar = require("../helpers/student/updateAvatar");

Router.use('/getAll', function (req, res) {

    getAllStudent(req.body, function (result, err) {
        res.send({result: result.results})
    })
});

Router.use('/getAvater', function (req, res) {

    getAvater(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.post('/updateAvatar', multipart(), function (req, res) {

    console.log(req.files);

    //get filename
    var filename = req.files.files.originalFilename || path.basename(req.files.files.ws.path);
    //copy file to a public directory
    var targetPath = 'public/upload/avatar/' + filename;
    //copy file
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));


    updateAvatar('../upload/avatar/' + filename, req.body.sid, function (result, err) {
        res.json({code: 200, filepath: '../upload/avatar/' + filename, status: result.status});
    })

});

Router.use('/getEvalulation', function (req, res) {

    getEvalulation(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/updateStudent', function (req, res) {

    updateStudent(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/deleteStudent', function (req, res) {
    let sid = req.param("sid");

    deleteStudent(sid, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/deleteCourse', function (req, res) {

    deleteOrderCourse(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/addStudent', function (req, res) {

    addStudent(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/searchStudent', function (req, res) {

    searchStudent(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchStudentBySid', function (req, res) {

    searchStudentBySid(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/getCourse', function (req, res) {

    getCourse(req.body, function (result, err) {
        res.send({result: result.results})
    })
});

Router.use('/orderCourse', function (req, res) {

    orderCourse(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

module.exports = Router;