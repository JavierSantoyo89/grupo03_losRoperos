const { body } = require('express-validator')


const validateRegister = [
    body('firstName').notEmpty().withMessage('Falta el nombre'),
    body('lastName').notEmpty().withMessage('Falta tu apellido'),
    body('user').notEmpty().withMessage('Falta tu nombre de usuario'),
    body('email')
    .notEmpty().withMessage('Falta tu correo').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('address').notEmpty().withMessage('Falta tu dirección'),
    body('avatar')
    .custom((value,{ req }) => {
        let acceptedExtensions = ['.jpg','.png','.gif']
        let file = req.file;
        
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        }else{
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ('Las extensiones de archivo permitidas son '+ acceptedExtensions.join(',') )
            }
        }
        return true
    })
]

module.exports = validateRegister;