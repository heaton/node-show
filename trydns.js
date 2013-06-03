var dns = require('dns');

dns.resolve4('google.com', function (err, addresses) {
	if (err) throw err;

	console.log('addresses: ' + JSON.stringify(addresses));

	addresses.forEach(function (a) {
		dns.reverse(a, function (err, domains) {
			if (err) {
				throw err;
			}

			console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
		});
	});
});

dns.resolve4('heaton.cai', function (err, addresses) {
	if (err) throw err;

	console.log('address: ' + addresses[0]);
});

dns.lookup('google.com', function (err, addresses) {
	if (err) throw err;

	console.log('addresses: ' + addresses);
});

var cb = function(err, addresses){
	console.log(addresses);
}
cb.immediately = true;
dns.resolve4('heaton.cai', cb);

console.log('lookup google.com');
