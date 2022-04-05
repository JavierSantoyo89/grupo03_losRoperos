const { body } = require('express-validator');
const path = require('path');
const bcryptjs = require('bcryptjs');
let db = require('../../data/models');
const res = require('express/lib/response');

const validateRegister = [
    body('firstName').notEmpty().withMessage('Falta el nombre'),
    body('lastName').notEmpty().withMessage('Falta tu apellido'),
    body('user').notEmpty().withMessage('Falta tu nombre de usuario'),
    body('email')
    .notEmpty().withMessage('Falta tu correo').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),   
    body('pass').notEmpty().withMessage('Falta contraseña'),
    body('passConfirm')
    .custom((value,{ req }) => {
        let password = req.body.pass;
        let hash = bcryptjs.hashSync(password,10);
        let passConfirm = req.body.passConfirm
        if(!passConfirm){
            throw new Error ('Falta comprobar tu contraseña')
        }
        else {
            if(!bcryptjs.compareSync(passConfirm,hash)){
            throw new Error ('Contraseña no concuerda')
            }
        }
        return true
    }),
    body('address').notEmpty().withMessage('Falta tu dirección'),
    body('birth_date').notEmpty().withMessage('Falta fecha de nacimiento'),
    body('avatar')
    .custom((value,{ req }) => {
        let acceptedExtensions = ['.jpg','.png','.gif']
        let file = req.file;
        
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        } else {

            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
            
                throw new Error ('Las extensiones de archivo permitidas son '+ acceptedExtensions.join(',') )
                
            }
        }
        
        return true
    })
]

module.exports = validateRegister;
                           //!-- Falta ver como imprimir los errores en la vista -->