function authAccessProducts(req, res, next) {
	
	let user =req.session.userLogged
		if (user != undefined){
		next()
	}else{
		res.redirect('/detail_invite/:id')
	}


	
	
	
	
	
	/*if (!req.session.userLogged) {
		return res.redirect('/user/login');
	
	res.redirect('/noautorizado')*/
}

module.exports = authAccessProducts;

