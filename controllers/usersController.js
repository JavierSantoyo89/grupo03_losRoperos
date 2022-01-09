const {validationResult} = require('express-validator');
const { redirect } = require('express/lib/response');

const usersController = {
    login: (req,res) => {
        res.render('login')
    },
    registro: (req,res) => {
        res.render("registro")
    },
    validarUser: (req,res) => {
        let errors = validationResult(req);
        //res.render("registro")
        if (!errors.isEmpty()){ //Si errores no esta vacio
            console.log(errors)
                 return res.render ('login', { mensajeDeError: errors.mapped()})
               res.send(errors)
               //res.redirect('search')
               //res.render('product')
               console.log('hasta aqui jala')
        }
    }
}
    module.exports=usersController;