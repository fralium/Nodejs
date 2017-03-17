var http = require ("http");

http.createServer(function (request, response){
	//send http head
	//http status : 200, ok
	//content: text/plain
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	//send response data "hello world"
	response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://localohost:8888')