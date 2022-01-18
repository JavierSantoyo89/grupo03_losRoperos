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
    Index: (req,res) =>{
        res.render("products",{products})
    },
    
    home: (req,res) => {
        //res.send('Web de productos')
        res.render("addProduct")
    },
    
    // ---- Muesta el detalle de un producto ( Done )
    detalle: (req,res) => {
        //res.send('detalle')
       // res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
		const id = req.params.id;
        let product = products.find(product => product.id == id)
		//let product = products.find(product => product.id == id)
        //res.render('products',{product, toThousand});
        res.render("detail",{product, toThousand} )
    },

    // ---- Muestra la vista de agregar producto (Done) ---- //
    Create: (req,res) => {
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
        res.render("CreateProduct")
    },
    update: (req,res) => {
        let id = req.params.id;
        res.render('updateProduct')
        //res.send('Funciono el controlador de actualizar' + id + 'Por metodo put!!!')
    },
    delete: (req,res) => {
        let id = req.params.id;
        res.render('deleteProduct')
        //res.send('Funciono el controllador delete ' + id)
    }
};

module.exports = productsController