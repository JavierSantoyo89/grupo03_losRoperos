function userAuth (req, res, next){
    if (req.session.usuarioALogearse != undefined){
        res.render('home')
    }else{
        res.send('Requiere permisos para verlo animal')
    }
 }

 module.exports = userAuth;