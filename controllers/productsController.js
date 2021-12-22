const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
    

    res.render("detalleProducto")
	}
};

module.exports = controller;