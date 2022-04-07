// ************ Require's ************
const { log } = require('console');
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Controller API ************
const productsAPI = require('../controllers/API/productsAPI');

// ************ Middlewares *************
const validateNewProduct = require('../middlewares/products/validateNewProduct')
const userAuth = require('../middlewares/user/userAuth') // Validad que el usuario esta loggeado
const multerProductUpdate = require('../middlewares/products/multerProductUpload')
const multerS3 = require('../middlewares/products/multerS3ProductUploadAWS')

// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.Index);
router.get('/detail/:id',productsController.detalle); 

// ---- Rutas para agregar producto ---- //
router.get('/new',  productsController.NewProduct);
router.post('/new',validateNewProduct, multerProductUpdate,productsController.CreateProduct);

// ---- Rutas para editar por determinado ID ---- //
router.get('/edit/:id', productsController.Edit);
router.post('/edit/:id',multerProductUpdate, productsController.Update);

// ---- Rutas para delete ---- //
router.post('/delete/:id',productsController.delete);

// ---- Rutas de API REST ---- //

router.get('/all',productsAPI.ProductsAll) // * http://localhost:1689/products/all * //
router.get('/count_in_sale',productsAPI.countador_insale) // * http://localhost:1689/products/count_in_sale //
router.get('/count_season',productsAPI.countador_season) // * http://localhost:1689/products/count_season //

router.post('/new_api',productsAPI.CreateProductAPI) // * http://localhost:1689/products/new_api * //
router.delete('/delete_api/:id',productsAPI.delete_api) // * http://localhost:1689/products/delete_api/{id} * //
router.get('/:id',productsAPI.ProductId) // * http://localhost:1689/products/{id} * //

module.exports = router;