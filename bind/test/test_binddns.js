var dns = require('../binddns');
var file = require('../file');

config = {dbFilePath : 'bind_file/'};

function fetchHost(ip, name){
	return {'ip': ip, 'name': name};
}

function fetchDemoDns(){
	var hs = new Array();
	hs.push(fetchHost('1.1.1.1', 'abc'));
	hs.push(fetchHost('2.2.2.2', 'efg'));
	return dns.create('heaton.cai', hs);
}
exports.testCreate = function(end, assert){
	var hs = new Array();
	hs.push(fetchHost('1.1.1.1', 'abc'));
	hs.push(fetchHost('2.2.2.2', 'efg'));
	var d = dns.create('heaton.cai', hs);
	assert.equal(3, d.a.length);
	assert.equal('@', d.a[0].name);
	assert.equal('abc', d.a[1].name);
	assert.equal('1.1.1.1', d.a[1].ip);
	assert.equal('efg', d.a[2].name);
	assert.equal('2.2.2.2', d.a[2].ip);

	hs.push(fetchHost('0.0.0.0', '@'));
	d = dns.create('heaton.cai', hs);
	assert.equal(3, d.a.length);
	assert.equal('@', d.a[0].name);
	assert.equal('0.0.0.0', d.a[0].ip);
};

exports.testWrite = function(end, assert){
	var d = fetchDemoDns();
	var fp = d.writeDb();
	end(function(){
		var c = file.readAll(fp);
		var ss = c.trim().split('\n');
		assert.equal(12, ss.length);
	});
};

exports.testFetchConf = function(end, assert){
	var d = fetchDemoDns();
	var ss = d.fetchConf().split('\n');
	assert.equal('zone "heaton.cai" {', ss[0].trim());
	assert.equal('type master;', ss[1].trim());
	assert.equal('file "/etc/bind/zones/db.heaton.cai";', ss[2].trim());
	assert.equal('};', ss[3].trim());
	assert.equal('', ss[4].trim());
};
