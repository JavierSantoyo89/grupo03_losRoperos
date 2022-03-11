
const { body } = require('express-validator')


const validateNreProduct = [
    body('name').notEmpty().withMessage('Ingresa el nombre del producto'),
    body('model').notEmpty().withMessage('Ingresa el modelo del producto'),
    body('brand').notEmpty().withMessage('Ingresa el marca del producto'),
    body('price').notEmpty().withMessage('Ingresa el precio del producto'),
    body('size').notEmpty().withMessage('Ingresa la talla del producto'),
    body('status').notEmpty().withMessage('Ingresa el valor de status del producto.'),
    body('description').notEmpty().withMessage('Ingresa una descripcion del producto.'),
    body('img')
    .custom((value,{ req }) => {
        let acceptedExtensions = ['.jpg','.png']
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

module.exports = validateNreProduct;