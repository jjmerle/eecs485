var http = require("http"); // Requires 'http' module
var url = require("url");

function start(route) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		console.log("Request received");

		route(pathname)

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World!");
		response.end();
	}).listen(8080);

	console.log("Server has started");
}

exports.start = start;