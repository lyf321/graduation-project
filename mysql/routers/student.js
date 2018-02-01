const express = require('express');
const Router = express.Router();

const getAllStudent = require("../helpers/student/getAllStudent");

Router.use('/getAll', function (req, res) {

    getAllStudent(req.body, function (result, err) {
        res.send({result: result.results})
    })
});


module.exports = Router;