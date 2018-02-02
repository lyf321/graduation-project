const express = require('express');
const Router = express.Router();

const getAllStudent = require("../helpers/student/getAllStudent");
const updateStudent = require("../helpers/student/updateStudent");
const deleteStudent = require("../helpers/student/deleteStudent");
const addStudent = require("../helpers/student/addStudent");
const searchStudent = require("../helpers/student/searchStudent");

Router.use('/getAll', function (req, res) {

    getAllStudent(req.body, function (result, err) {
        res.send({result: result.results})
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


module.exports = Router;