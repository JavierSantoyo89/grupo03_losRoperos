// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const { body } = require('express-validator');

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Validation ************
const validateLogin =[
    body('userName').notEmpty() .withMessage('Ingresa un nombre de usuario valido'),
    body('email').notEmpty() .isEmail() .withMessage('Ingresa un correo valido'),
    body('pass').notEmpty() .withMessage('Ingresa password correcto'),
]


routerUsers.get('/login',usersController.login);
routerUsers.post('/login', validateLogin, usersController.validarUser)
routerUsers.get('/registro',usersController.registro);

module.exports = routerUsers;