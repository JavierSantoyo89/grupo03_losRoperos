 function userInvited (req, res, next){
    if (req.session.usuarioALogearse == undefined){
        res.render('home')
    }else{
        res.send('Requiere permisos para ver esta seccion, favor de iniciar sesion')
    }
 }

 module.exports = userInvited;