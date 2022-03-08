// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const { body } = require('express-validator')
const multer = require('multer');
const path = require('path')

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images/users');
    },
    filename: (req,file,cb) => {
        console.log(file)
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,filename)
    }
})

const uploadFile = multer({storage})


// ************ Controller Require ************
const usersController = require('../controllers/usersController');
const validateLogin = require('../middlewares/validateLogin');


// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login', validateLogin, usersController.ProcessLogin);

routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', uploadFile.single('avatar') ,usersController.processRegister)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


module.exports = routerUsers;