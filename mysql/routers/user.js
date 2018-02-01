/**
 * Created by liyangfan on 18-1-22.
 */

const express = require('express');
const Router = express.Router();

const login = require("../helpers/user/login");

//注册
Router.use('/register', function (req, res) {
    console.log("注册");
});

//登录
Router.use('/login', function (req, res) {
    console.log(req.body);

    login(req.body, function (result, err) {
        res.send({status: result.status, identity: 1})
    })
});


module.exports = Router;