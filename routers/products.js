// ************ Require's ************
const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ---- Rutas dedicadas para productos ---- //
router.get('/',productsController.Index);
router.get('/detail/:id',productsController.detalle); 

// ---- Rutas para agregar producto ---- //
router.get('/create',productsController.Create);
router.post('/create',productsController.Create);

// ---- Rutas para update ---- //
router.get('/update/:id',productsController.update);
router.put('/update',productsController.update);

// ---- Rutas para delete ---- //
router.get('/delete/:id',productsController.delete);
router.delete('/delete',productsController.delete);



module.exports = router;