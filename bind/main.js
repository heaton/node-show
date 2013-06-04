var file = require('./file');
var hosts = require('./hosts');

var domains = new Array();
file.read('domains.txt').eachLine(function(line){
	if(line.startsWith('#')) return;
	domains.push(line);
});

hosts.file('hosts.txt');
var dnses = new Array();
domains.forEach(function(domain){
	dnses.push(hosts.dns(domain));
});

var conf = "";
dnses.forEach(function(dns){
	dns.writeDb();
	conf += dns.fetchConf();
});

file.write('bind_file/named.conf.gfw', conf);

console.log('create file success');
	
