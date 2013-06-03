String.prototype.startsWith = function(str){
	return this.slice(0, str.length) == str;
};
String.prototype.endsWith = function(str){
	return this.slice(-str.length) == str;
};
String.prototype.replaceAll = function(org, tag){
	return this.replace(new RegExp(org, 'g'), tag);
};
String.prototype.right = function(i){
	if(i>=0) return this.slice(-i);
	return this.slice(0, i);
};
