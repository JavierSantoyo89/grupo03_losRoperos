const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/mainController');

const router = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
router.get('/',mainController.index);
router.get('/carrito', mainController.carrito);
router.get('/search', mainController.buscador);
router.get('/invite', mainController.invite)
router.get('/pruebapi', mainController.Pruebapi)
router.get('/privacidad',mainController.avisoPrivacidad)



router.get('/pruebasession',mainController.numeroVisitas);


module.exports = router;

