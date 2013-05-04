// Node Module dependencies:
var express = require('express');
var http = require('http');
var path = require('path');

var app = express.createServer(express.logger());
var port = process.env.PORT || 1337;







// Error Handler
app.configure('development', 
	function()
	{
		app.use(express.errorHandler());
	}
);

// Server Initilization Logging
app.listen(port, 
	function() 
	{
		console.log("Express server listening on port " + port);
	}
);

// Defines routes, and thier handlers
app.get('/', 
	function(request, response) 
	{
		response.send('Hello World!');
	}
);