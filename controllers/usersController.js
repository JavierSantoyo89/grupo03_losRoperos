const {validationResult} = require('express-validator');
const { redirect } = require('express/lib/response');

const usersController = {
    login: (req,res) => {
        res.render('login')
    },
    registro: (req,res) => {
        res.render("registro")
    },
    createUser: (req,res) => {
        /*let newUser = {
            FirstName: req.body.name,
            LastName:req.body.,
            Date:"16/03/1989",
            mail:"javier.santoyo@yahoo.com",
            Password:*/
            res.send(req.body)
        }

    }
    module.exports=usersController;