function DevLogger(){
	this.log = (msg)=>{
		console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
		console.log(msg)
		console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
	};
	this.dir = (obj)=>{
		console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
		console.dir(obj);
		console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
	};
}

function ProdLogger(){
	this.log = ()=>{};
	this.dir = ()=>{};
}

var smartLogger = function(url) {
	var logger;

	if(url.match(/^https?:\/\/[^:]+?:8080/i)) {
		// Dev Env
		logger = DevLogger;
	}else {
		// Prod env
		logger = ProdLogger
	}

	return new logger;
};


// var logger = smartLogger('https://mysite.com:8080');
// logger.log(`I'm the logger.log!`);