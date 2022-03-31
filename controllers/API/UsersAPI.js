const { log } = require('console');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// **************** Llamada a la BD **************** //
let db = require('../../data/models');
const Sequelize = require("Sequelize");
const Op = Sequelize.Op;


const UsersAPI ={

     //  *************** Carga a la BD todos los usuarios mediante la API (Done)  ***************  //
    UsersAll:(req,res)=>{
        db.Users.findAll()
            //{where: {idUser: id}}
            
            .then(user=>{
                return res.status(200).json({
                    total: user.length,
                    data: user,
                    status: 200,
                    SearchAll: 'Ok'  
                })

            })
    },
    PruebaLogeo:(req,res)=>{
        db.Users.findAll(req.body.email)
            .then(user=>{
                return res.status(200).json({
                    data: user,
                    status: 200,
                    SearchById: 'Ok'
                })
            })




    },
    //  *************** Carga desde la BD un usuario mediante la API (Done)  ***************  //
    UserId: (req,res) =>{
        db.Users.findAll({
            where: {id: req.params.id}
        })
            .then(user=>{
                return res.status(200).json({
                    data: user,
                    status: 200,
                    SearchById: 'Ok'
                });
            })
    },
    //  *************** Carga un nuevo usuario a la BD mediante la API (Done)  ***************  //
    new_user_api:(req,res)=>{
        db.Users.create(req.body)
        .then(user=>{
            return res.status(200).json({
                data: user,
                status: 200,
                Created: 'Ok'
            })
        })
    },
    //  *************** Borra un usuarios de la BD mediente la API  ***************  //
    delete_api: (req,res)=>{
        db.Users.destroy({
            where: {id: req.params.id}
        })
        .then(response =>{
            return res.json(response)
        })
    }
}

module.exports = UsersAPI