// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// /*** GET ONE PRODUCT ***/ 
router.get('/:id',productsController.detalle); 

module.exports = router;