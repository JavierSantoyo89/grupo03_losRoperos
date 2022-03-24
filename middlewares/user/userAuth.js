function userAuth (req, res, next){
            //req.session.usuarioALogearse = 'javier'
        if (req.session.usuarioALogearse != undefined){
            console.log(req.session)
            res.render('home')
        }else{
            //res.send('Requiere permisos para verlo animal')
            //res.redirect('../../views/noAutorizado.ejs')
            res.redirect('/noautorizado')
            //../views/viewsFooter/aviso_privacidad.ejs
        }
 }

 module.exports = userAuth;

/*
 if (req.session.usuarioALogearse != undefined){
    res.render('home')
}else if{
    //res.send('Requiere permisos para verlo animal')
    res.redirect('/')
    next();
}  }*/