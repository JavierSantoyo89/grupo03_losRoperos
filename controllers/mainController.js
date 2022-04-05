const { error, log } = require('console');
const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const Sequelize = require("Sequelize");
const Op = Sequelize.Op;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let db =require('../data/models') //---- Manda llamar la base de datos ----//


const mainController = {
    // *---- Muesta todos los productos en el index ( Funciona al 100% ) ---- //
    index: (req,res) => {
        var season = db.Products.findAll({
            where:{
                nameStatus:'Season'
            }
        });

        var inSale = db.Products.findAll({
            where:{
                nameStatus:'In-sale'
            }
        });

        Promise.all([season,inSale])
            .then(function([season,inSale]){
                res.render('home',{season:season, inSale:inSale})
            })
            .catch(function (error) {
                console.log(error);  
             })
      
             //db.Products.findAll()
           // .then(function(products){
           // res.render("home", {products:products})
        // Se muestran todos los articulos registrados en la BD //
                
       // })
    },
 
    carrito : (req,res) => {
        res.render('carrito')
    }, 
    // *---- Muestra los productos buscados por titulo.  ( Funciona al 100% ) ---- //
    buscador: (req,res) =>{
            db.Products.findAll({
                where:  {
                    name: {
                      [Op.like]: '%' + req.query.buscador + '%'
                          }
                        }
            })
            .then(function (products) {
                res.render('search',{products:products})
                console.log('Entro a la DB y saco datos');
            })
            .catch(function (error) {
              console.log(error);  
            }) 
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
    },
    doc_api:(req,res)=>{
        res.render('../views/viewsFooter/DocsAPI.ejs')
    }
}

module.exports = mainController;