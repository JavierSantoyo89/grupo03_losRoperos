const { validationResult } = require('express-validator');
const { redirect } = require('express/lib/response');
const fs =require('fs')
const path = require('path');

var bcrypt = require('bcrypt');


//const userJSON = path.join(__dirname, '../data/User.json');

const usersController = {
    login: (req,res) => {
        res.render('login')
    },
    ProcessLogin: (req,res) =>{
        let errors = validationResult(req); // --------------- Lee el archivo JSON de usuarios ------- //
        
        // Si no hay errores de validación
        if(errors.isEmpty()){
            let userJSON = fs.readFileSync('./data/user.json', {encoding: 'utf-8'});
            let users;

            if (userJSON == ""){
                users = [];
            }
            else{
                users= JSON.parse(userJSON);
                console.log(users);  // ------------------------------------ //
            }

            for(let i=0; i<users.length; i++){
                if (users[i].email == req.body.email){
                    let pass = req.body.password
                    console.log(users[i].email);
                    console.log(users[i].password);
                    console.log(req.body.password);
                    console.log(users[i].user);
                    console.log(req.body.user); //? ---------- hasta aqui funciona ------- //
                    //var usuarioALogearse = users[i].user
                    var usuarioALogearse = undefined
                    /* if (bcrypt.compareSync(req.body.password, users[i].password)){ //? --- Como no funciona el IF no carga la variable usuarioALogaerse y te manda a undefined --- //
                        var usuarioALogearse = users[i];
                        console.log(usuarioALogearse + 'en variable');
                        break;
                    }*/
                }
            }

            if(usuarioALogearse == undefined){
                //res.render('home')
                //return res.render('login', {errors: [{msg: 'Credenciales invalidas'}]});
                console.log("Usuario a logaerse no capturado")
            }

            req.session.usuarioLogieado = usuarioALogearse;
            res.send('../')
        }

        // Si sí hay errores de verificación
        else{
            res.render('login', {errors: errors.array() });
        }

    },
    registro: (req,res) => {
        res.render("register")
    },
    createUser: (req,res) => {
        /*let newUser = {
            FirstName: req.body.name,
            LastName:req.body.,
            Date:"16/03/1989",
            mail:"javier.santoyo@yahoo.com",
            Password:*/
            res.send(req.body)
        },
    processRegister: (req,res) => {
      const resultValidation = validationResult(req);
      
      
      if(resultValidation.errors.length > 0){
          return res.render ('register',{errors: resultValidation.mapped()})
      }
    }

    }
    
    module.exports=usersController;