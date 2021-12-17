const path = require('path');

const mainController = {
    home: (req,res) => {
        res.render("home")
    },
    product: (req,res) => {
        res.render("product")
    },
    carrito : (req,res) => {
        res.render("carrito")
    },
    login : (req,res) => {
        res.render("login")
    },
    register : (req,res) => {
        res.render("register")
    }
    
}

module.exports = mainController;