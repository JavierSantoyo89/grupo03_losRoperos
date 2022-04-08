
function authMiddleware(req, res, next) {
	let user = req.session.userLogged
	if (user != undefined){
		res.redirect('/user/login');
	}else{
		res.redirect('/noautorizado')
	}


	
	
	
	
	
	/*if (!req.session.userLogged) {
		return res.redirect('/user/login');
	
	res.redirect('/noautorizado')*/
}

module.exports = authMiddleware;