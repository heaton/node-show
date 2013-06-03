var fs = require('fs');

exports.readAll = function(f){
	return fs.readFileSync(f, 'utf-8');
};

var lines = null;

exports.read = function(f){
	var text = this.readAll(f);
	lines = text.trim().split('\n');
	return this;
};

exports.eachLine = function(callback){
	if(lines==null) return;
	lines.forEach(function(line){
		callback(line.trim());
	});
};

exports.write = function(f, data){
	fs.writeFile(f, data, function(err){
		if(err) throw err;
	});
};
