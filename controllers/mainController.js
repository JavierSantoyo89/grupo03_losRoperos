const path = require('path');

const mainController = {
    //home: (req,res) => {res.render("home")}, Ya no se usa.
    index: (req,res) => {
        res.render("home")
    },
    carrito : (req,res) => {
        //res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
        res.render('carrito')
    },
    buscador: (req,res) =>{
        let busqueda = req.query.buscador
        //res.send("Este animal busco " & busqueda)
        res.render("search")
    },
    numeroVisitas: (req,res)=>{
        res.render("PruebaPago")
/*if(req.session.numeroVisitas == undefined) {
            req.session.numeroVisitas =0
        }
        req.session.numeroVisitas ++;
        res.send('Sesion tiene el numero: ' + req.session.numeroVisitas)*/
    }
    
}

module.exports = mainController;