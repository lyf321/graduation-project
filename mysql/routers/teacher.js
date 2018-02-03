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

Router.use('/searchTeacher', function (req, res) {

    searchTeacher(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});


module.exports = Router;