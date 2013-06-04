var dns = require('dns');
var file = require('./file');
require('./arrays');
require('./strings');

function Dns(domain, hosts){
	var base = this;
	this.a = new Array();
	var hasAt = false;
	hosts.forEach(function(h){
		if(h.name=="@"){
			base.a.before(h);
			hasAt = true;
			return;
		}
		base.a.push(h);
	});
	if(!hasAt){
		base.a.before({name:'@', ip: null});
	}

	function tranA(a){
		var re = new Array();
		a.forEach(function(item){
			var l = item.name + '\tIN\tA\t';
			if(item.ip==null){
				l += '${null}';
			}else{
				l += item.ip;
			}
			re.push(l);
		});
		return re.join('\n');
	}
	this.writeDb = function(){
		var tem = file.readAll(__dirname + '/db.domain.tem');
		var re = tem.replaceAll('\\$\\{domain\\}', domain).replaceAll('\\$\\{a\.list\\}', tranA(this.a));
		var fileName = global.config.dbFilePath + 'db.' + domain;
		dns.resolve4(domain, function(err, addresses){
			file.write(fileName, re.replaceAll('\\$\\{null\\}', addresses[0]));
		});
		return fileName;
	};
	this.fetchConf = function(){
		return 'zone "${domain}" {\n\ttype master;\n\tfile "/etc/bind/zones/db.${domain}";\n};\n'.replaceAll('\\$\\{domain\\}', domain);
	};
}
exports.create = function(domain, hosts){
	return new Dns(domain, hosts);
};

