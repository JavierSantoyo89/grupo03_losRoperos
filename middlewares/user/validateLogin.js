 const { body } = require('express-validator')
const fs = require('fs');

const validateLogin = [
    body('email')
        .notEmpty().withMessage('Debes completar el campo email').bail()
        .isEmail().withMessage('Ingresa un correo valido'),
    body('password')
        .notEmpty().withMessage('Debes completar el campo contraseña').bail()
        .isLength({ max: 50 }).withMessage('La contraseña debe ser menor a 50 caracteres'),
];

module.exports = validateLogin;