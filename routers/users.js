// ************ Require's ************
const express = require('express');
const routerUsers = express.Router();
const multer = require('multer');
const path = require('path')

// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images/users');
    },
    filename: (req,file,cb) => {
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,filename)
    }
})

const uploadFile = multer({storage})



// ************ Controller Require ************
const usersController = require('../controllers/usersController');
// ************ Middleware's Require ************
const validateLogin = require('../middlewares/user/validateLogin');
const validateRegister = require('../middlewares/user/validateRegister')


// ---- Rutas dedicadas a user's ---- //
routerUsers.get('/login',usersController.login);
routerUsers.post('/login', validateLogin, usersController.ProcessLogin);

routerUsers.get('/register',usersController.registro);
routerUsers.post('/register', uploadFile.single('avatar'), validateRegister ,usersController.processRegister)
// routerUsers.post('/login', validateLogin, usersController.validarUser)


module.exports = routerUsers;