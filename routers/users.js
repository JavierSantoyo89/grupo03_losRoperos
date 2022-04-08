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
const validateRegister = require('../middlewares/user/validateRegister');
const multerUser = require('../middlewares/user/multerUser');
//const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userAuth = require('../middlewares/user/userAuth');


// ---- Rutas dedicadas a user's ---- //
// Login 
routerUsers.get('/login',usersController.login);
routerUsers.post('/login',validateLogin, multerUser, usersController.loginProcess);

// Perfil
routerUsers.get('/profile/',authMiddleware,usersController.profile);

// Logout
routerUsers.get('/logout/', usersController.logout);

// ---- Rutas dedicadas a new user's ---- //
routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', multerUser, validateRegister ,usersController.processRegister);
routerUsers.get('/list',usersController.listaUsuarios);
routerUsers.get('/editar/:idUser',usersController.editUser);
routerUsers.post('/editar/:idUser', multerUser,validateRegister ,usersController.updateUser);
routerUsers.get('/detalle/:idUser', usersController.detailUser);
routerUsers.post('/borrar/:idUser', usersController.deleteUser);
// routerUsers.post('/login', validateLogin, usersController.validarUser)


// ---- Rutas de API REST ---- //
routerUsers.get('/user_dashboard/:id',UsersAPI.Api_UserId_Dashboard) // * http://localhost:1689/user/user_dashboard/{id} * //
routerUsers.get('/user_dashboard/',UsersAPI.Api_user_dashboard) // * http://localhost:1689/user/user_dashboard/ *  DONE//
routerUsers.get('/all',UsersAPI.UsersAll) // * http://localhost:1689/user/all * //
routerUsers.get('idUser',UsersAPI.UserId) // * http://localhost:1689/user/{id} * //
routerUsers.post('/new_user_api',UsersAPI.new_user_api) // * http://localhost:1689/user/new_user_api * //
routerUsers.delete('/delete_api/:id',UsersAPI.delete_api) // * http://localhost:1689/user/delete_api/{id} * //

routerUsers.post('/pruebalogeo',UsersAPI.PruebaLogeo) // * http://localhost:1689/user/ * //

module.exports = routerUsers;