const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    detalle : (req,res) => {
        //res.sendFile(path.join(__dirname,'../views/carrito.ejs'));
		let id = req.params.id
		let product = products.find(product => product.id == id)
        res.render('products.ejs',{product, toThousand})
    }
};
module.exports = productsController