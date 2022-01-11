const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const category = products.filter(function(product){
	return product.category == 'stock'
})

const productsController = {
    // ---- Muesta todos los productos disponibles (No funciona al 100%) ---- //
    home: (req,res) => {
        //res.send('Web de productos')
        res.render("addProduct")
    },
    
    // ---- Muesta el detalle de un producto ( Done )
    detalle: (req,res) => {
        //res.send('detalle')
       // res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
		let id = req.params.id
		let products = products.find(product => product.id == id)
        res.render('products',{products, toThousand});
    },

    // ---- Muestra la vista de agregar producto (Done) ---- //
    addProduct: (req,res) => {
        let newProduct = {
            name: req.body.name,
            model: req.body.model,
            marca: req.body.marca,
            category: req.body.category,
            count: req.body.count,
            description: req.body.description
        }
        //res.send('Ya jalo por aqui')
        //res.send(newProduct);
        //res.render('addProduct')
        res.redirect('./')
    },
};

module.exports = productsController