const { log } = require('console');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// **************** Llamada a la BD **************** //
let db = require('../../data/models');

const Sequelize = require("Sequelize");
const Op = Sequelize.Op;

const mainAPI = {

    search:(req,res) =>{
        db.Products.findAll({
            where:  {
                name: {
                  [Op.like]: '%' + req.query.buscador + '%'
                      }
                    }
        })
            .then(products=>{
                return res.status(200).json({ searchLength: products.length, data: products, search: 'Ok'});
            })
    }
}
// ! No funciona el metodo Search por culap del id, quiero buscar por nombre y no lo logro */
module.exports = mainAPI
