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
    },
    buscador: (req,res) =>{
        let busqueda = req.query.buscador
        //res.send("Este animal busco " & busqueda)
        res.render("search")
    }
    
}

module.exports = mainController;