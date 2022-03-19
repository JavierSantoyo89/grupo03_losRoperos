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
    noautorizado : (req,res) => {
        //res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
        res.render('noAutorizado')
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
    Pruebapi:(req,res)=>{
       return res.json('Jalo esta mierda!!!');
    },
    avisoPrivacidad: (req,res)=>{
        res.render("../views/viewsFooter/aviso_privacidad");
    },
    nosotros:(req,res)=>{
        res.render("../views/viewsFooter/nosotros");
    },
    tiendas:(req,res)=>{
        res.render('../views/viewsFooter/tiendas')
    },
    invitar:(req,res)=>{
        res.render('../views/viewsFooter/invitar')
    },
    FAQ:(req,res)=>{
        res.render('../views/viewsFooter/faq')
    },
    contacto:(req,res)=>{
        res.render('../views/viewsFooter/contacto')
    }
}

module.exports = mainController;