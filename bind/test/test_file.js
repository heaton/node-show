var file = require('../file');

exports.testRead = function(beforeExit, assert){
	var text = file.readAll('1.txt');
	assert.equal('aa', text.trim());
};

exports.testEachLine = function(beforeExit, assert){
	var text = new Array();
	file.read('2.txt').eachLine(function(line){
		text.push(line);
	});
	assert.equal(2, text.length);
	assert.equal('aa', text[0]);
	assert.equal('bb', text[1]);
};
exports.testWrite = function(beforeExit, assert){
	file.write('3.txt', 'abc');
};
