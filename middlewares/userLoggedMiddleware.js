let db = require('../data/models')
const sequelize =db.sequelize;

function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail
    console.log(emailInCookie);

    if (emailInCookie != undefined) {
        let userFromCookie = db.Users.findOne({where: {email :emailInCookie}});

        Promise.any([userFromCookie])
            .then(function(userFromCookie){
                if(req.session){
                    req.session.userLogged = userFromCookie;
                }
                
                //console.log(userFromCookie);
            });
    }

    if(req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

    }
    
    

	next();
}

module.exports = userLoggedMiddleware;