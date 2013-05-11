// Node dependencies:
var express = require('express');
var http = require('http');
var path = require('path');
// Application requirements //
var home = require('./routes/home');


app = express(); 

app.configure(
	function()
	{
		app.set('port', process.env.PORT || 1337);
		app.set('views', __dirname + '/views');
		app.set('view engine', 'ejs');
		app.use(express.favicon(__dirname + "/public/images/favicon.ico"));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));
		app.use(express.static(path.join(__dirname, 'public')));
	}
);


// Error Handler
app.configure('developement',
	function()
	{
		app.use(express.errorHandler());
	}
);

// Server Logging
app.listen(app.get('port'), 
	function() 
	{
		console.log("Express server listening on port " + app.get('port'));
	}
);

// Defines routes, and thier handlers
app.get('/', home.home);