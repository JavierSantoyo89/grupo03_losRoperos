const { log } = require('console');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// **************** Llamada a la BD **************** //
let db = require('../../data/models');

const productsAPI = {
    
    // **************** Muestra todos los productos en formato JSON **************** //
    ProductsAll: (req,res) =>{
        db.Products.findAll()
            .then(products=>{
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                });
            })
    }

}

module.exports = productsAPI