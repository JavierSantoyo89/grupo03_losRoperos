const { validationResult } = require('express-validator');
const { redirect } = require('express/lib/response');
const fs =require('fs')
const path = require('path');
var bcrypt = require('bcrypt');
const { Console } = require('console');

let db = require('../data/models')

//const userJSON = path.join(__dirname, '../data/User.json');

const usersController = {

    // ************ Controlers of Login(Get/POST) ************** //
    login: (req,res) => {
        res.render('login')
    },
    ProcessLogin: (req,res) =>{
        /*let mail = req.params.id;
        db.Users.findByPk(id)
            .then(function (Users) {
                 res.render("detail",{Users:Users} )
            })*/
            let email =  req.body.email;
            let pass = req.body.password;
            console.log('El correo es: ' + email);
            console.log('El pass es: ' + pass);
    },

            // ?---------------------------------------------------------------------------------------- //
            // *--------------------------- Controladores para agregar usuarios -----------------------* //
            // ?---------------------------------------------------------------------------------------- //

    // ************ Controller vista registrar usuario (Done) ************** //
    registro: (req,res) => {
        res.render("register")
    },
     // ************ Controller accion registrar usuario (Done) ************** //
    processRegister: (req,res) => {
        //console.log("el nombre del avatar en controlador es: " + req.file.filename);
            db.Users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.user,
                email: req.body.email,
                password: req.body.pass,
                birthday: req.body.birth_date,
                address: req.body.address, 
                IdImageUser: req.file.filename
            })
            res.redirect('/')
    }
}
    
module.exports=usersController;