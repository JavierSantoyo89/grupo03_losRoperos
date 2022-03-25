// ************ Require's ************
const { log } = require('console');
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middlewares *************
const validateNewProduct = require('../middlewares/products/validateNewProduct')
const userAuth = require('../middlewares/user/userAuth') // Validad que el usuario esta loggeado
const multerProductUpdate = require('../middlewares/products/multerProductUpload')

// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.Index);
router.get('/detail/:id',productsController.detalle); 

// ---- Rutas para agregar producto ---- //
router.get('/new',  productsController.NewProduct);
router.post('/new',validateNewProduct,multerProductUpdate,productsController.CreateProduct);

// ---- Rutas para editar por determinado ID ---- //
router.get('/edit/:id', productsController.Edit);
router.post('/edit/:id', productsController.Update);

// ---- Rutas para delete ---- //
router.post('/delete/:id',productsController.delete);



module.exports = router;