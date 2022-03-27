// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');
const path = require('path')


// ************ Middlewares *************



// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const UsersAPI = require('../controllers/API/UsersAPI')

// ************ Middleware's Require ************
const validateLogin = require('../middlewares/user/validateLogin');
const validateRegister = require('../middlewares/user/validateRegister')
const multerUser = require('../middlewares/user/multerUser')

// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login',validateLogin, usersController.ProcessLogin);

// ---- Rutas dedicadas a new user's ---- //
routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', multerUser, validateRegister ,usersController.processRegister)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


// ---- Rutas de API REST ---- //
routerUsers.get('/all',UsersAPI.UsersAll) // * http://localhost:1689/user/all * //
routerUsers.get('/:id',UsersAPI.UserId) // * http://localhost:1689/user/{id} * //
routerUsers.post('/new_user_api',UsersAPI.new_user_api) // * http://localhost:1689/user/new_user_api * //
routerUsers.delete('/delete_api/:id',UsersAPI.delete_api) // * http://localhost:1689/user/delete_api/{id} * //

module.exports = routerUsers;