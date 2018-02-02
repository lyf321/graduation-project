const express = require('express');
const Router = express.Router();

const getAllTeacher = require("../helpers/teacher/getAllTeacher");
const updateTeacher = require("../helpers/teacher/updateTeacher");
const deleteTeacher = require("../helpers/teacher/deleteTeacher");
const addTeacher = require("../helpers/teacher/addTeacher");
const searchTeacher = require("../helpers/teacher/searchTeacher");

Router.use('/getAll', function (req, res) {

    getAllTeacher(req.body, function (result, err) {
        res.send({result: result.results})
    })
});

Router.use('/updateTeacher', function (req, res) {
    console.log(req.body);
    var tid = req.body.tid;
    var tname = req.body.tname;
    var tage = parseInt(req.body.tage);
    var tsex = req.body.tsex;

    updateTeacher(tid, tname, tage, tsex, function (result, err) {
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
    console.log(req.body)

    addTeacher(req.body, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/searchTeacher', function (req, res) {

    searchTeacher(req.body, function (result, err) {
        console.log(result)
        res.send({result: result.results, status: result.status})
    })
});


module.exports = Router;