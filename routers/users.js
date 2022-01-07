// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

routerUsers.get('/login',usersController.login);
routerUsers.get('/registro',usersController.registro);

module.exports = routerUsers;