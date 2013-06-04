var file = require('../file');

exports.testConfig = function(end, assert){
	var config = JSON.parse(file.readAll(__dirname + '/../main.json'));
	assert.isNotNull(config.domains);
	assert.isNotNull(config.hosts);
	assert.isNotNull(config.bindFile);
	assert.isNotNull(config.dbFilePath);
};
