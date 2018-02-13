const express = require('express');
const Router = express.Router();

const getAllStudent = require("../helpers/student/getAllStudent");
const updateStudent = require("../helpers/student/updateStudent");
const deleteStudent = require("../helpers/student/deleteStudent");
const addStudent = require("../helpers/student/addStudent");
const searchStudent = require("../helpers/student/searchStudent");
const getCourse = require("../helpers/student/getCourse");
const deleteOrderCourse = require("../helpers/student/deleteCourse");
const searchStudentBySid = require("../helpers/student/searchStudentBySid");
const orderCourse = require("../helpers/student/orderCourse");

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