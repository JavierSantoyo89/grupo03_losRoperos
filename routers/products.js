// ************ Require's ************
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();


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
router.post('/new',  validateNewProduct,productsController.NewProduct);

// ---- Rutas para editar por determinado ID ---- //
router.get('/edit/:id', productsController.Edit);
router.post('/edit/:id', productsController.Update);

// ---- Rutas para delete ---- //
router.delete('/delete/:id',productsController.delete);



module.exports = router;