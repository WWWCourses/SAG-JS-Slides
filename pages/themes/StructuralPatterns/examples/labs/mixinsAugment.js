 // The Mixin - exports functionalities for vehicles
var Mixin = function (){};
Mixin.prototype = {
    drive(){console.log( "Driving" )},
    ride(){console.log( "Riding" )},
    stop(){console.log( "Stopping" )},
    purr(){console.log("Purr rrr rrpp prr ppprrrr")},
};

function augment( receiver, giver, methodsArray ){
	if( methodsArray.length ){
		methodsArray.forEach(
			m=>{receiver.prototype[m] = giver.prototype[m] }
		 );
	}else{
		for ( let methodName in giver.prototype ) {
	            if ( !Object.hasOwnProperty.call(receiver.prototype, methodName) ) {
	                receiver.prototype[methodName] = giver.prototype[methodName];
	            }
	}
}

// some constructor, which can borrow methods from Mixin
var Bike = function ( settings ) {
   	this.model = settings.model || "unknown";
};
var Car = function ( settings ) {
    this.model = settings.model || "unknown";
};
Car.prototype.drive = function(){
	console.log(`THE CAR IS DRIVING`);
}



 augment( Bike, Mixin, ['ride', 'purr'] );
 augment( Car, Mixin, ['drive', 'stop'] );

 var harlay = new Bike( {model: 'Harlay Davidson'});
console.log(`harlay.model: ${harlay.model}`);
harlay.ride();
harlay.purr();
