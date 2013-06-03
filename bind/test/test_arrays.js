require('../arrays');

exports.testBefore = function(end, assert){
	var a = new Array();
	a.before('aa');
	a.before('bb');
	assert.equal('bb', a[0]);
	assert.equal('aa', a[1]);
};
