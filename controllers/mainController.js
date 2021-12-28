const path = require('path');

const mainController = {
    home: (req,res) => {
        res.render("home")
    },
    product: (req,res) => {
        res.render("product")
    },
    carrito : (req,res) => {
        //res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
        res.render('carrito')
    }
    
}

module.exports = mainController;