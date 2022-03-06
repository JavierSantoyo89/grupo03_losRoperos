// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const { body } = require('express-validator')

// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const validateLogin = require('../middlewares/validateLogin');


// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login', validateLogin, usersController.ProcessLogin);

routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', usersController.createUser)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


module.exports = routerUsers;