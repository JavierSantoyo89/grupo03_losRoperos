// ************ Require's ************
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.home);


router.get('detalle/:id',productsController.detalle); 
router.get('/add',productsController.home);
router.post('/add',productsController.addProduct);




module.exports = router;