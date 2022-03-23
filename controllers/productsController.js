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
    },// ---- Muesta el detalle de un producto ( Done )
    detalle: (req,res) => {
		const id = req.params.id;
        console.log(id)
        db.Products.findByPk(id)        // .findByPk(req.params.id)
            .then(function (products) {

                 res.render("detail",{products:products} )
            })
    },
    new: (req,res) => {
        res.render("addProduct")
    },
    // ---- Muestra la vista de agregar producto (Done) ---- //
    Create:(req,res) => {
        res.render("CreateProduct")
    },
    Edit: (req,res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)
		
        res.render('EditProduct',{productToEdit})
        //res.send('Funciono el controlador de actualizar' + id + 'Por metodo put!!!')
    },
    Update: (req,res) => {
        let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			img: productToEdit.img,
		};
        // nuevoArray
		
		let newProducts = products.map(p => {
			if (p.id == productToEdit.id) {
        // const n = {}
        // n.id = productToEdit.id
        // otras propiedades
      
				return p = {...productToEdit};
			}
			return p;
		})
    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    
    products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
    res.redirect('/');

    },
    delete: (req,res) => {
        let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products');
        
        //res.send('Funciono el controllador delete ' + id)
    }
};

module.exports = productsController