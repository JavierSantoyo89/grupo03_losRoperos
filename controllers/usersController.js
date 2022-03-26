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


    // ************ Controlers of Login(Get/POST) ************** //
    registro: (req,res) => {
        res.render("register")
    }
    /*,
    createUser: (req,res) => {
        /*let newUser = {
            FirstName: req.body.name,
            LastName:req.body.,
            Date:"16/03/1989",
            mail:"javier.santoyo@yahoo.com",
            Password:
            res.send(req.body)
        }*/,
    processRegister: (req,res) => {
      const resultValidation = validationResult(req);
      if(resultValidation.errors.length > 0){
          return res.render ('register',{errors: resultValidation.mapped(),
            oldData: req.body
        })
    }
      return res.send('Todo correcto')
    }
}
    
module.exports=usersController;