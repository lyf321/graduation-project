/**
 * Created by liyangfan on 18-1-27.
 */
const express = require('express');
const Router = express.Router();

const url = require("url");
const querystring = require("querystring");


const getAllCourse = require("../helpers/course/getAllCourse");
const updateCourse = require("../helpers/course/updateCourse");
const deleteCourse = require("../helpers/course/deleteCourse");
const addCourse = require("../helpers/course/addCourse");
const searchCourse = require("../helpers/course/searchCourse");

Router.use('/getAll', function (req, res) {

    getAllCourse(req.body, function (result, err) {
        res.send({result: result.results})
    })
});

Router.use('/updateCourse', function (req, res) {
    var cid = req.param('cid');
    var tid = req.param('tid');

    updateCourse(cid, tid, function (result, err) {
        res.send({result: result.status})
    })
});


Router.use('/deleteCourse', function (req, res) {
    var cid_del = req.param('cid');
    console.log(cid_del);
    deleteCourse(cid_del, function (result, err) {
        res.send({result: result.status})
    })
});

Router.use('/searchCourse', function (req, res) {

    searchCourse(req.body, function (result, err) {
        console.log(result)
        res.send({result: result.results, status: result.status})
    })
});

module.exports = Router;