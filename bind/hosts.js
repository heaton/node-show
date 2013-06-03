var file = require('./file');
var dns = require('./binddns');
require('./strings');

exports.file = function(f){
	file.read(f);
}

function tran(h){
	var ss = h.split(' ');
	var n = "@";
	if(ss.length==2){
		n = ss[1];
	}
	return {ip:ss[0], name:n};
}
exports.dns = function(domain){
	var hs = new Array();
	file.eachLine(function(line){
		if(line.startsWith('#')){
			return;
		}
		line = line.replace('\t', ' ').replace(/(\s)+/, ' ');
		if(line.endsWith("." + domain) || line.endsWith(" " + domain)){
			line = line.right(-(domain.length+1));
			hs.push(tran(line));
		}
	});
	return dns.create(domain, hs);
}
