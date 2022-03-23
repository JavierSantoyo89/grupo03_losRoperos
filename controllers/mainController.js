const { error, log } = require('console');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db =require('../data/models') //---- Manda llamar la base de datos ----//

const mainController = {
    index: (req,res) => {
       db.Products.findAll()
            .then(function(products){
            res.render("home", {products:products})
        // Se muestran todos los articulos registrados en la BD //
        })
    },
    carrito : (req,res) => {
        res.render('carrito')
    }, 
    noautorizado : (req,res) => {
        res.render('noAutorizado')
    },
    buscador: (req,res) =>{
        let busqueda = req.query.buscador
        res.render("search")
    },
    numeroVisitas: (req,res)=>{
        res.render("PruebaPago")
    },
    Pruebapi:(req,res)=>{
       return res.json('Jalo esta mierda!!!');
    },
    avisoPrivacidad: (req,res)=>{
        res.render("../views/viewsFooter/aviso_privacidad");
    },
    tiendas:(req,res)=>{
        res.render('../views/viewsFooter/tiendas')
    },
    invitar:(req,res)=>{
        res.render('../views/viewsFooter/invitar.ejs')
    },
    FAQ:(req,res)=>{
        res.render('../views/viewsFooter/faq')
    },
    contacto:(req,res)=>{
        res.render('../views/viewsFooter/contacto')
    },
    construccion:(req,res)=>{
        res.render('../views/viewsFooter/restero.ejs')
    }, acerca: (req,res)=>{
        res.render('../views/viewsFooter/AcerdaDe.ejs')
    }
}

module.exports = mainController;