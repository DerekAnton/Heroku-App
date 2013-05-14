
exports.home = function(req, res)
{
	console.log('serving home');
	res.render('home', {title: 'Welcome To Derek Anton\'s page'});
};