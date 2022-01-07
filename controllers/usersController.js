const usersController = {
    login: (req,res) => {
        res.render('login')
    },
    registro: (req,res) => {
        res.render("registro")
    }
}
    module.exports=usersController;