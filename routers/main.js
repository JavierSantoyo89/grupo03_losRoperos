const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/',mainController.home);

router.get('/product',mainController.product);

router.get('/carrito', mainController.carrito);

/*router.get('/login',mainController.login);

router.get('/register',mainController.register);
*/
module.exports = router;

