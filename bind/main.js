var file = require('./file');
var hosts = require('./hosts');

var configFile = 'main.json';
if(process.argv.length > 2)
	configFile = process.argv[2];

var config = JSON.parse(file.readAll(configFile));
global.config = config;

var domains = new Array();
file.read(config.domains).eachLine(function(line){
	if(line.startsWith('#')) return;
	domains.push(line);
});

hosts.file(config.hosts);
var dnses = new Array();
domains.forEach(function(domain){
	dnses.push(hosts.dns(domain));
});

var conf = "";
dnses.forEach(function(dns){
	dns.writeDb();
	conf += dns.fetchConf();
});

file.write(config.bindFile, conf);

