const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const productsDB = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		//res.sendFile(path.join(__dirname, "../views/products"));
    res.render("products", {'products': productsDB});
	}
};

module.exports = controller;