const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/mainController');

const router = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
router.get('/',mainController.index);
router.get('/carrito', mainController.carrito);
router.get('/search', mainController.buscador);
router.get('/pruebapi', mainController.Pruebapi)

// ---- Rutas dedicadas para navegacion general en FOOTER ---- //
router.get('/privacidad',mainController.avisoPrivacidad)
router.get('/contacto',mainController.contacto);
router.get('/faq',mainController.FAQ);
router.get('/invite',mainController.invitar)
router.get('/nosotros',mainController.nosotros);
router.get('/tiendas',mainController.tiendas)



router.get('/pruebasession',mainController.numeroVisitas);


module.exports = router;

