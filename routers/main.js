const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/mainController');
const mainAPI = require('../controllers/API/mainAPI')

const router = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
router.get('/',mainController.index);
router.get('/carrito', mainController.carrito);

router.get('/search', mainController.buscador);

// ---- Rutas dedicadas para navegacion general en FOOTER ---- //
router.get('/privacidad',mainController.avisoPrivacidad)
router.get('/contacto',mainController.contacto);
router.get('/faq',mainController.FAQ);
router.get('/invite',mainController.invitar)
router.get('/tiendas',mainController.tiendas);
router.get('/noautorizado',mainController.noautorizado);
router.get('/rastreo',mainController.construccion)
router.get('/acerca',mainController.acerca)

// ---- Rutas de API REST ---- //
router.get('/search_api',mainAPI.search)




router.get('/pruebasession',mainController.numeroVisitas);


module.exports = router;

