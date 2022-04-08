let User = require('../data/models/user')

function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;
    console.log("Ya me ejecuté");
    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;

    }

	next();
}

module.exports = userLoggedMiddleware;