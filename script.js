var http=require("http");


 var server=http.createServer(function(request,respone){

	respone.writeHead(200,{"content-Type":"text/plain"});
	respone.end("hello srikanth")
})
 server.listen(1235);

console.log("server is running port 1234");