var http = require("http");
var stat = require("node-static");
var serv = new stat.Server("./webroot");

http.createServer(function(req, res) {
	serv.serve(req, res, function (e, r) {
		if (e && (e.status === 404)) {
			res.writeHead(404);
			res.end("404: Not Found");
		}
	});
}).listen(8080);
