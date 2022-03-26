const { log } = require('console');
const fs = require('fs');
const path = require('path');
const multer = require('multer')

let db = require('../data/models')

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const category = products.filter(function(product){
	return product.category == 'stock'
})

const productsController = {
            // ?---------------------------------------------------------------------------------------- //
            // *----------- Controladores para mostar todos los productos y detalle del mismo ---------* //
            // ?---------------------------------------------------------------------------------------- //
    //* ---- Muesta todos los productos disponibles (Funciona al 100%) ---- //
    Index: (req,res) =>{
        db.Products.findAll()
            .then(function (products) {
                res.render('products',{products:products})
                console.log('Entro a la DB y saco datos');
            })
            .catch(function (error) {
              console.log(error);  
            }) 
    },
    // *---- Muesta el detalle de un producto ( Funciona al 100% ) ---- //
    detalle: (req,res) => {
		let id = req.params.id;
        db.Products.findByPk(id)
            .then(function (products) {
                 res.render("detail",{products:products} )
            })
            // ?------------------------------------------------------------------------------- //
            // *------------- Controladores de la vista de crear nuevo producto --------------* //
            // ?------------------------------------------------------------------------------- //
            
    },
    // *---- Muestra la vista de agregar un nuevo producto (Done) ---- //
    NewProduct:(req,res) => {
        res.render("CreateProduct")
    },
    // * ---- Controlador para realizar el Insert en la BD (Done) ---- //
    CreateProduct: (req,res)=>{
            let productoImagen = req.body;
            productoImagen.imgProduct = req.file.filename

        if (req.file){
            db.Products.create({
            
                name: req.body.name,
                model: req.body.model,
                brand: req.body.brand,
                size: req.body.size,
                color: req.body.color,
                discount: req.body.discount,
                price: req.body.price,
                decriptionProduct: req.body.description,
                nameStatus: req.body.status,
                imgProduct: req.file.filename
            })
        console.log('el nombre de la imagen en el controlador ' + req.params.imgProduct);
        res.redirect('/')
        }else{
            res.render('home')
        }

    },
        // ?------------------------------------------------------------------------------- //
        // *---------------- controladores de la vista de editar producto ----------------* //
        // ?------------------------------------------------------------------------------- //
        
    // *---- Muesta el detalle a modificar un producto ( Funciona al 100% ) ---- //
    Edit: (req,res) => {
		let id = req.params.id;
        db.Products.findByPk(id)
            .then(function (products) {
                res.render('EditProduct',{products:products} )
            })
 
    },
    // *---- Controlador para hacer un UPDATE en la BD por su Id (Funciona al 100%) ----//
    Update: (req,res) => {
        let id = req.params.id;
        let productoImagen = req.body;
        productoImagen.imgProduct = req.file.filename;
            console.log('el nombre de la imagen en el controlador update ' + req.file.filename);

            db.Products.update({
                name: req.body.name,
                model: req.body.model,
                brand: req.body.brand,
                size: req.body.size,
                color: req.body.color,
                discount: req.body.discount,
                price: req.body.price,
                decriptionProduct: req.body.description,
                nameStatus: req.body.status,
                imgProduct: req.file.filename
            },
            {
                where:{
                    id: req.params.id
                }
            })
                res.redirect('/products/edit/' + req.params.id)
	},

        //? --------------------------------------------------------------------------------- //
        //* ---------------- controlador de la vista de borrado de producto ---------------- *//
        //? --------------------------------------------------------------------------------- //
// *---- Borrar producto (Done) ----//
    delete: (req,res) =>{
        db.Products.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/')
    }
};

module.exports = productsController