var hosts = require('../hosts');

hosts.file('test/hosts.txt');

exports.youtube = function(beforeExit, assert){
	var dns = hosts.dns('youtube.com');
	assert.equal(7, dns.a.length);
	assert.equal('@', dns.a[0].name);
	assert.equal('accounts', dns.a[1].name);
	assert.equal('203.208.46.206', dns.a[1].ip);
	assert.equal('apiblog', dns.a[2].name);
	assert.equal('help', dns.a[3].name);
}

exports.ytimg = function(beforeExit, assert){
	var dns = hosts.dns('ytimg.com');
	assert.equal(7, dns.a.length);
	assert.equal('@', dns.a[0].name);
	assert.equal('i', dns.a[1].name);
	assert.equal('203.208.46.206', dns.a[1].ip);
}
