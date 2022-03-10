const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    //home: (req,res) => {res.render("home")}, Ya no se usa.
    index: (req,res) => {
        const season = products.filter( p => p.status === "Season");

        const inSale= products.filter( p => p.status === "In-sale");
        res.render("home", {season,inSale})
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
    },
    invite: (req,res)=>{
        res.render("invite")
    },
    Pruebapi:(req,res)=>{
       return res.json('Jalo esta mierda!!!');
    },
    avisoPrivacidad: (req,res)=>{
        res.render("avisoPrivasidad");
    }
    
}

module.exports = mainController;