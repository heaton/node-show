var options = {
	host: 'www.google.com',
	port: 80,
	path: '/upload',
	method: 'post'
};
var http = require('http');
var req = http.request(options, function(res){
	console.log('status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		console.log("body:" + chunk);
	});
});
req.on('error',function(e){
	console.log('problem with request:'+e.message);
});
//write date to request body
req.write('data\n');
req.write('data\n');
req.end();
