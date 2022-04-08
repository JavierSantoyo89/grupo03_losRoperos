function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/user/login');
	}
	res.redirect('/noautorizado')
}

module.exports = authMiddleware;