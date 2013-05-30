var http = require('http'),
	fs = require('fs');

var clients = [];

http.createServer(function(req,res){
	console.log(req.url);
	if(req.url == '/'){
		fs.readFile('./index.html', function(err, data){
			if(err){
				throw err;
			}
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(data);
			res.end();
		});
		return;
	}
	if(req.url!="/m"){
		fs.readFile('.' + req.url, function(err, data){
			if(err){
				res.end();
				return;
			}
			res.writeHeader(200, {"Content-Type": "text/javascript"});
			res.write(data);
			res.end();
		});
		return;
	}
	res.writeHead(200, {'Content-Type':'text/plain'});
	switch(req.method){
		case 'POST': 
			req.addListener('data', function(POST){
				var message = POST.toString();
				var clientsCopy = clients;
				clients = [];
				clientsCopy.forEach(function(client){
					client.write("<div>" + message + "</div>");
					client.end();
				});
			});
			res.end("success");
			break;
		case 'GET': 
			clients.push(res);
			break;
	};
}).listen(8012);

console.log("Server has been stated!");
