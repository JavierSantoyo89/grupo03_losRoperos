const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
       
        //res.send('Ya jalo por aqui')
        //res.send(newProduct);
        //res.render('addProduct')
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
    },
    Store: (req,res) => {
     
    let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        img: "1.jpg"//req.file.filename
    };
    products.push(newProduct)

	fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));

	res.redirect('/products/');
    }
};

module.exports = productsController