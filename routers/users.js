// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

routerUsers.get('/registro',usersController.registro);

module.exports = routerUsers;