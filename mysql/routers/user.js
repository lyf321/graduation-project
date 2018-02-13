/**
 * Created by liyangfan on 18-1-22.
 */

const express = require('express');
const Router = express.Router();


const login = require("../helpers/user/login");
const register = require("../helpers/user/register");
const getAll = require("../helpers/user/getAll");
const deleteUser = require("../helpers/user/deleteUser");
const updateUser = require("../helpers/user/updateUser");
const searchUser = require("../helpers/user/searchUser");
const searchAdmin = require("../helpers/user/searchAdmin");
const updatepass = require("../helpers/user/updatePass");

//注册
Router.use('/register', function (req, res) {
    register(req.body, function (result, err) {
        res.send({status: result.status});
    })
});

//登录
Router.use('/login', function (req, res) {

    login(req.body, function (result, err) {
        res.send({status: result.status, identity: result.result[0].identity, id: result.result[0].uid})
    })
});

Router.use('/getAll', function (req, res) {

    getAll(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});


Router.use('/deleteUser', function (req, res) {
    let uid = req.param("uid");

    deleteUser(uid, function (result, err) {
        res.send({status: result.status,})
    })
});

Router.use('/updateUser', function (req, res) {

    updateUser(req.body, function (result, err) {
        res.send({status: result.status,})
    })
});

Router.use('/updatepass', function (req, res) {

    updatepass(req.body, function (result, err) {
        res.send({status: result.status})
    })
});

Router.use('/searchUser', function (req, res) {

    searchUser(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

Router.use('/searchAdmin', function (req, res) {

    searchAdmin(req.body, function (result, err) {
        res.send({result: result.results, status: result.status})
    })
});

module.exports = Router;