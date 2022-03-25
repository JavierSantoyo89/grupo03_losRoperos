// ************ Require's ************
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path')
const upload = multer({ dest: '../public/images/products' })

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images/users');
    },
    filename: (req,file,cb) => {
        let filename = file.fieldname + '-' + Date.now()
        //`${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,filename)
    }
})

const uploadFile = multer({storage: storage})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middlewares *************
const validateNewProduct = require('../middlewares/products/validateNewProduct')
const userAuth = require('../middlewares/user/userAuth') // Validad que el usuario esta loggeado

// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.Index);
router.get('/detail/:id',productsController.detalle); 

// ---- Rutas para agregar producto ---- //
router.get('/new',  productsController.NewProduct);
router.post('/new',uploadFile.single('imgProduct'),  validateNewProduct,productsController.CreateProduct);

// ---- Rutas para editar por determinado ID ---- //
router.get('/edit/:id', productsController.Edit);
router.post('/edit/:id', productsController.Update);

// ---- Rutas para delete ---- //
router.get('/delete/:id',productsController.vistaDelete);
router.post('/delete/:id',productsController.delete);



module.exports = router;