const { NewProduct } = require("../controllers/productsController");

function authMiddleware(req, res, next) {
	
	let user =req.session.userLogged
		if (user != undefined){
		next()
	}else{
		res.redirect('/noautorizado')
	}


	
	
	
	
	
	/*if (!req.session.userLogged) {
		return res.redirect('/user/login');
	
	res.redirect('/noautorizado')*/
}

module.exports = authMiddleware;