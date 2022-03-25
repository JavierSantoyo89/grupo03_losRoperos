const { log } = require('console');
const fs = require('fs');
const path = require('path');

let db = require('../data/models')

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const category = products.filter(function(product){
	return product.category == 'stock'
})

const productsController = {
    // ---- Muesta todos los productos disponibles (Funciona al 100%) ---- //
    Index: (req,res) =>{
        db.Products.findAll()
            .then(function (products) {
                res.render('products',{products:products})
                console.log('Entro a la DB y saco datos');
            })
            .catch(function (error) {
              console.log(error);  
            }) 
    },// *---- Muesta el detalle de un producto ( Funciona al 100% ) ---- //
    detalle: (req,res) => {
		let id = req.params.id;
        db.Products.findByPk(id)
            .then(function (products) {
                 res.render("detail",{products:products} )
            })
    },// *---- Muestra la vista de agregar un nuevo producto (Done) ---- //
    NewProduct:(req,res) => {
        res.render("CreateProduct")
    },
    CreateProduct: (req,res)=>{
        db.Products.create({
            name: req.body.name,
            model: req.body.model,
            brand: req.body.brand,
            size: req.body.size,
            color: req.body.color,
            amount: req.body.amount,
            price: req.body.price,
            decriptionProduct: req.body.description,
            nameStatus: req.body.status,
            imgProduct: req.body.img
        })
        res.redirect('/')
    },
        // ?------------------------------------------------------------------------------- //
        // *---------------- controladores de la vista de editar producto ----------------* //
        // ?------------------------------------------------------------------------------- //
        
    // *---- Muesta el detalle a modificar un producto ( Funciona al 100% ) ---- //
    Edit: 
    (req,res) => {
		let id = req.params.id;
        db.Products.findByPk(id)
            .then(function (products) {
                res.render('EditProduct',{products:products} )
            })
 
    },// !---- Revisar codigo para que al hacer put sobreescriba el articulo ----//
    Update: (req,res) => {
        let id = req.params.id;
            db.Products.update({
                name: req.body.name,
                model: req.body.model,
                brand: req.body.brand,
                size: req.body.size,
                color: req.body.color,
                amount: req.body.amount,
                price: req.body.price,
                decriptionProduct: req.body.description,
                nameStatus: req.body.status,
                imgProduct: req.body.img
            },
            {
                Where: {
                    id:req.params.id
                }
            })
                res.redirect('/products/edit/' + req.params.id)
		},

        // -------------------------------------------------------------------------------- //
        /* ---------------- controlador de la vista de borrado de producto ---------------- */
        // -------------------------------------------------------------------------------- //
// !---- Revisar codigo para hacer que borre el producto el articulo ----//
    vistaDelete: (req,res) => {
     let id = req.params.id;
        db.Products.findByPk(id)
            .then(function (products) {
                res.render('deleteProduct',{products:products} )
            })
             
        //res.send('Funciono el controllador delete ' + id)
    },
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