const { log } = require('console');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// **************** Llamada a la BD **************** //
let db = require('../../data/models');
let Op = db.Sequelize.Op;

const productsAPI = {
    
    // **************** Muestra todos los productos en formato JSON (Done) **************** //
    ProductsAll: (req,res) =>{
        db.Products.findAll()
            .then(products=>{
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200,
                    SearchAll: 'Ok'
                });
            })
    },
    // *************** Muestra el detalle del producto en funcion de su ID en formato JSON (Done) **************** //
    ProductId: (req,res) =>{
        db.Products.findByPk(req.params.id)
            .then(products=>{
                return res.status(200).json({
                    data: products,
                    status: 200,
                    SearchById: 'Ok'
                });
            })
    },
    
    //  *************** Carga a la BD mediante la API (Done)  ***************  //
    CreateProductAPI: (req,res)=>{
        db.Products.create(req.body)
            .then(products=>{
                return res.status(200).json({
                    data: products,
                    status: 200,
                    Created: 'Ok'
                })
            })
    },
    //  *************** Borra un registo de la BD mediente la API  ***************  //
    delete_api: (req,res) =>{
        db.Products.destroy({
            where: {id: req.params.id}
        })
        .then(response =>{
            return res.json(response)
        })
    }
}

module.exports = productsAPI