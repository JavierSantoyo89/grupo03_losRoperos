// ************ Require's ************
const express = require('express');
const routerLogin = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

routerLogin.get('/',loginController.login);

module.exports = routerLogin