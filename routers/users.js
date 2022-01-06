// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

routerUsers.get('/',usersController.registro);

module.exports = routerUsers;