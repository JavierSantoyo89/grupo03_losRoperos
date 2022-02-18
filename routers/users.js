// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const { body } = require('express-validator')

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

// ************ Validation ************
/*const validateLogin =[
    body('userName').notEmpty() .withMessage('Ingresa un nombre de usuario valido'),
    body('email').notEmpty() .isEmail() .withMessage('Ingresa un correo valido'),
    body('pass').notEmpty() .withMessage('Ingresa password correcto'),
]
*/

// Validaciones -- Mike
const validateLogin = [
    body('user')
        .notEmpty().withMessage('Debes completar el campo usuario').bail()
        .isLength({ max: 50 }).withMessage('El usuario debe ser menor a 50 caracteres'),
    body('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Ingresa un correo valido'),
    body('password')
        .notEmpty().withMessage('Debes completar el campo contraseña').bail()
        .isLength({ max: 50 }).withMessage('La contraseña debe ser menor a 50 caracteres'),
];

// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login', validateLogin, usersController.ProcessLogin); //FALTA validaciones.

routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', usersController.createUser)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


module.exports = routerUsers;