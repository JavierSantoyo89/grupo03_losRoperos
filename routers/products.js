// ************ Require's ************
const { Router } = require('express');
const express = require('express');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.home);


router.get('detalle/:id',productsController.detalle); 
router.get('/add',productsController.addProduct);




module.exports = router;