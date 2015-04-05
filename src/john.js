var John = function(params){
	params[0](params[1]);
}

John.identities = [];

var a = an = function(thing){
	return thing;
}

var is = function(thing){
	return [
		function(thing){
			this.identities.push(thing);
		},
		thing
	]	
};

var says = function(words){
	console.log(words);
};