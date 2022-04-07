const { validationResult } = require('express-validator');
const { redirect, cookie } = require('express/lib/response');
const fs =require('fs')
const path = require('path');
var bcryptjs = require('bcryptjs');
const { Console } = require('console');
const Sequelize = require("Sequelize");
const Op = Sequelize.Op;
const { error, log } = require('console');
let db = require('../data/models')
const sequelize =db.sequelize;
const res = require('express/lib/response');
const { send } = require('process');
//const userJSON = path.join(__dirname, '../data/User.json');

const usersController = {

    // ************ Controlers of Login(Get/POST) ************** //
    login: (req,res) => {
        res.render('login')
    },
    // -- Login Mike
    loginProcess: (req, res) => {

        var email = db.Users.findOne({
            where: {email :req.body.email}
        });       
        
        Promise.any([email])
            .then(function(email){

                if(email !==null){
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, email.password);
                    if (isOkThePassword){
                        res.send('Puedes entrar') 
                    }
                    else {
                        res.render('login', {
                            errors: {
                                password: {
                                    msg: 'Password incorrecto'
                                }
                            }
                        
                        })
                    }
                    //res.send(email);
                    
                }else {
                    // Mandar mensaje de error
                    res.render('login', {
                        errors: {
                            email: {
                                msg: 'No existe el usuario en la db'
                            }
                        }
                    
                    });
                    
                }
                 
                
              
         });
        

        
    },

    //--Fin Login Mike

    ProcessLogin: (req,res) =>{
        let errors = validationResult(req);
        if (errors.isEmpty()){
           
        }else{
            return res.render('login',{errors: errors.errors});
        }


        /*let mail = req.params.id;
        db.Users.findByPk(id)
            .then(function (Users) {
                 res.render("detail",{Users:Users} )
            })*/
            req.session.mail =  req.body.email;
            req.session.password = req.body.password;
            console.log('El correo es: ' + req.session.mail);
            console.log('El pass es: ' + req.session.password);
            res.cookie('mailPrueba',req.session.mail,{maxAge: 3000})
    },

            // ?---------------------------------------------------------------------------------------- //
            // *--------------------------- Controladores para agregar usuarios -----------------------* //
            // ?---------------------------------------------------------------------------------------- //

    // ************ Controller vista registrar usuario (Done) ************** //
    registro: (req,res) => {
        res.render("register")
    },
    editUser: (req,res) =>{
        let id= req.params.idUser
        db.Users.findByPk(id)
            .then(function(user) {
               res.render('editUser',{user:user})
               
            })
    },
    updateUser:(req,res)=>{
        db.Users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.user,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.pass,10),
            birthday: req.body.birth_date,
            address: req.body.address, 
            IdImageUser:req.file.filename
        },{
            where:{
                idUser: req.params.idUser
            }
        });

        res.redirect("/user/detalle/" + req.params.idUser)
    },
    deleteUser: (req,res)=>{
        db.Users.destroy({
            where:{
                idUser: req.params.idUser
            }
        })
        res.redirect('/user/list')

    },
    detalle:(req,res) => {
        res.render('detailUser')
    },
    detailUser: (req,res) =>{
        
        let id= req.params.idUser
        db.Users.findByPk(id)
            .then(function(user) {
               res.render('detailUser',{user:user})
               
            })

    },
    listaUsuarios:(req,res)=>{
        db.Users.findAll()
            .then(function(Users){
                res.render('listadoUsuarios',{Users:Users})
            })
    },
     // ************ Controller accion registrar usuario (Done) ************** //
    processRegister: (req,res) => {
        //console.log("el nombre del avatar en controlador es: " + req.file.filename);
    const resultValidation = validationResult(req)        

    var email = db.Users.findOne({
        where: {email :req.body.email}
    })
    
    Promise.any([email])
            .then(function(email){
                if(resultValidation.errors.length > 0){
                    return res.render('register' , 
                    {errors: resultValidation.mapped(), 
                    oldData: req.body
                    });
                    
                }
                if(email !==null){
                    console.log(email)
                        res.render('register' , 
                            {errors: {
                                    email: {
                                             msg: 'Email en uso. Intenta con otro' }
                            },
                            oldData: req.body
                            }
                        )
                    }else {
                        db.Users.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        userName: req.body.user,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.pass,10),
                        birthday: req.body.birth_date,
                        address: req.body.address, 
                        IdImageUser:req.file.filename
                       }).then(user => res.redirect('login'))}
                 
                
              
         })
      
  

 
       
    }
    
}
    
module.exports=usersController;

/*db.Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.user,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.pass,10),
    birthday: req.body.birth_date,
    address: req.body.address, 
    IdImageUser:req.file
   }) */