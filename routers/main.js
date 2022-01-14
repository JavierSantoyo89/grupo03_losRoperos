const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/mainController');

const router = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
router.get('/',mainController.index);
router.get('/carrito', mainController.carrito);
router.get('/search', mainController.buscador);


router.get('/pruebasession',mainController.numeroVisitas);


module.exports = router;

