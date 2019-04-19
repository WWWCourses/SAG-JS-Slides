var AppleMaker = function(id, color, prices){
	this.id = id;
	this.color = color;
	this.prices = prices;

	this.calcMinPrice = function(){
		return Math.min( ...prices);
	}
}

var apple45 = new AppleMaker(45, "red", 	[1,1.5, 0.9]);
var apple2 = new AppleMaker(2, "red", 	[1.2,1.3]);
var apple3 = new AppleMaker(3, "green", [1,1.5, 0.9]);
var apple4 = new AppleMaker(4, "red", 	[1,1.5, 0.9]);
var apple5 = new AppleMaker(5, "red", 	[1,1.5, 0.9]);
var apple6 = new AppleMaker(6, "red", 	[1,1.5, 0.9]);
var apple7 = new AppleMaker(7, "red", 	[0.5,1.5, 0.9]);
var apple8 = new AppleMaker(8, "red", 	[1,1.5, 0.9]);
var apple9 = new AppleMaker(9, "red", 	[1,1.5, 0.9]);
var apple10 = new AppleMaker(10, "red", [1,1.5, 0.9]);


var apples = [apple1, apple2, apple3, apple4, apple5, apple6, apple7, apple8, apple9, apple10 ];

// the main function
var cheepestApple = function( apples ){
	var apple1Min = apple1.calcMinPrice();
	var apple7Min = apple7.calcMinPrice();

	// var arrPrices = [0.9, 1.2, ];
	// var arrIDs 	  = [45, 2]

	Math.min( apple1Min,  apple7Min);


	// for (var i = 0, len=apples.length; i < len; i++) {
	// 	console.log( apples[i])
	// }
	// return the cheepest apple id;
}

cheepestApple();