const express = require('express');
const Router = express.Router();

const getAllTeacher = require("../helpers/teacher/getAllTeacher");

Router.use('/getAll', function (req, res) {

    getAllTeacher(req.body, function (result, err) {
        res.send({result: result.results})
    })
});


module.exports = Router;