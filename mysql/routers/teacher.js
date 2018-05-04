const express = require('express');
let multipart = require("connect-multiparty");
const Router = express.Router();
let fs = require("fs");
const path = require('path');

const getAllTeacher = require("../helpers/teacher/getAllTeacher");
const updateTeacher = require("../helpers/teacher/updateTeacher");
const deleteTeacher = require("../helpers/teacher/deleteTeacher");
const addTeacher = require("../helpers/teacher/addTeacher");
const searchTeacher = require("../helpers/teacher/searchTeacher");
const searchTeacherByTid = require("../helpers/teacher/searchTeacherByTid");
const searchOrderStudent = require("../helpers/teacher/searchOrderStudent");
const searchOrderStudentEvaluation = require("../helpers/teacher/searchOrderStudentEvaluation");
const searchCourse = require("../helpers/teacher/searchCourse");
const addEvaluation = require("../helpers/teacher/addEvaluation");
const updateEvaluation = require("../helpers/teacher/updateEvalulation");
const getAvatar = require("../helpers/teacher/getAvatar");
const getCourseByID = require("../helpers/teacher/getCourseByID");
const updateAvatar = require("../helpers/teacher/updateAvatar");


Router.use('/getAll', function (req, res) {

    getAllTeacher(req.body, function (result, err) {
        res.send({result: result.results})
    })
});

Router.use('/getCourseByID', function (req, res) {

    getCourseByID(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/getAvatar', function (req, res) {

    getAvatar(req.body, function (result, err) {
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
    //return file url


    updateAvatar('../upload/avatar/' + filename, req.body.tid, function (result, err) {
        res.json({code: 200, filepath: '../upload/avatar/' + filename, status: result.status});
    })
});

Router.use('/updateTeacher', function (req, res) {

    updateTeacher(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/deleteTeacher', function (req, res) {
    var tid = req.param('tid');

    deleteTeacher(tid, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/addTeacher', function (req, res) {

    addTeacher(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/addEvaluation', function (req, res) {

    addEvaluation(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/updateEvaluation', function (req, res) {

    updateEvaluation(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/searchTeacher', function (req, res) {

    searchTeacher(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchTeacherByTid', function (req, res) {

    searchTeacherByTid(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchOrderStudent', function (req, res) {

    searchOrderStudent(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchOrderStudentEvaluation', function (req, res) {

    searchOrderStudentEvaluation(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchCourse', function (req, res) {

    searchCourse(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});


module.exports = Router;

// 学习很认真，但是课下练习较少，明显感觉对知识不够熟练，但是学习很有灵气
// 建议课下进行大量的练习，巩固基础知识，加强对知识的掌握。加油