const path = require('path');

const mainController = {
    carrito : (req,res) => {
        //res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
        res.render('carrito')
    }
}

module.exports = mainController;