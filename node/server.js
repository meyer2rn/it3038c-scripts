var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/text"});
    res.end("Hello from Node!")
});

server.listen(8000)

console.log("Server listening on port 8000");
