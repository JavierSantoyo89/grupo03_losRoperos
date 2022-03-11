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
router.get('/newproduct',productsController.Create);

router.post('/',productsController.Store);

// ---- Rutas para Editar ---- //
router.get('/edit/:id',productsController.Edit);
router.put('/edit/:id',productsController.Update);

// ---- Rutas para delete ---- //
router.delete('/delete/:id',productsController.delete);



module.exports = router;