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
router.get('/newproduct',userAuth, productsController.Create);
router.post('/newproduct',userAuth, validateNewProduct,productsController.Create);


router.post('/',productsController.Store);

// ---- Rutas para Editar ---- //
router.get('/edit/:id',userAuth,productsController.Edit);
router.put('/edit/:id',userAuth,productsController.Update);

// ---- Rutas para delete ---- //
router.delete('/delete/:id',userAuth,productsController.delete);



module.exports = router;