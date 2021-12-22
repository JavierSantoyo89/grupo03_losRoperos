// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// /products
// AGREGA AQUI LAS Rutas de products

/*** GET ALL PRODUCTS ***/ 
//router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
/*router.get('/create/', productsController.create); 
router.post('/', productsController.store); */


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 
/*
// /*** EDIT ONE PRODUCT ***/ 
/*router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); */


// /*** DELETE ONE PRODUCT***/ 
/*router.delete('/delete/:id', productsController.destroy); 
*/

module.exports = router;