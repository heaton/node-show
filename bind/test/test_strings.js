require('../strings');

exports.testStartsWith = function(end, assert){
	assert.ok("abc.heaton.cai".startsWith("abc."));
	assert.ok(!'#abc.heaton.com'.startsWith("abc"));
};

exports.testEndsWith = function(end, assert){
	assert.ok("abc.heaton.cai".endsWith(".heaton.cai"));
	assert.ok("123 heaton.cai".endsWith(" heaton.cai"));
	assert.ok(!'123 abc.heaton.com'.endsWith(".heaton.cai"));
	assert.ok(!'123 abc.heaton,cai'.endsWith(".heaton.cai"));
};

exports.testReplaceAll = function(end, assert){
	assert.equal('adea', "abcdeabc".replaceAll('bc', ''));
	assert.equal('aabbcc', "aa${t}${t}cc".replaceAll('\\$\\{t\\}', 'b'));
};

exports.testRight = function(end, assert){
	assert.equal('cai', "abc.heaton.cai".right(3));
	assert.equal('abc.', "abc.heaton.cai".right(-'heaton.cai'.length));
};
