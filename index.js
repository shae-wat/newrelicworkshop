var http = require('http');
var newrelic = require('newrelic');
var sleep = require('sleep');

var server = http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	sleep.sleep(100);
	res.end('Hello world! The time is now' + new Date());
});

server.listen(8000);