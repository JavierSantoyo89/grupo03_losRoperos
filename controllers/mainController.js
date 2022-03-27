const { error, log } = require('console');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db =require('../data/models') //---- Manda llamar la base de datos ----//

const mainController = {
    // *---- Muesta todos los productos en el index ( Funciona al 100% ) ---- //
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
    
    buscador: (req,res) =>{
        let busqueda = req.query.buscador
        search:(req,res) =>{
            db.Products.findAll({
                where:  {
                    name: {
                      [Op.like]: '%' + req.query.buscador + '%'
                          }
                        }
            })
                .then(products=>{
                    return res.status(200).json({ searchLength: products.length, data: products, search: 'Ok'});
                })
        }

        res.render("search")
    }, 

        // ?------------------------------------------------------------------------------- //
        // *----------------           Vistas generales, falta CSS        ----------------* //
        // ?------------------------------------------------------------------------------- //
    noautorizado : (req,res) => {
        res.render('noAutorizado')
    },
    numeroVisitas: (req,res)=>{
        res.render("PruebaPago")
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