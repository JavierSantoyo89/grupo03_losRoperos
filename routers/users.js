// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');
const path = require('path')


// ************ Middlewares *************
const multerUser = require('../middlewares/user/multerUser')


// ************ Controller Require ************
const usersController = require('../controllers/usersController');
// ************ Middleware's Require ************
const validateLogin = require('../middlewares/user/validateLogin');
const validateRegister = require('../middlewares/user/validateRegister')

// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login',validateLogin, usersController.ProcessLogin);

// ---- Rutas dedicadas a new user's ---- //
routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', multerUser, validateRegister ,usersController.processRegister)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


module.exports = routerUsers;