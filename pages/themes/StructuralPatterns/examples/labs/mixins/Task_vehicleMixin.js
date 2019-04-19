// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define driveMixin functionality in an object.
// (the classical pattern suggest to use class, not object)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const driveMixin = {
    drive: function(){
        console.log(`${this.model} is driving`);
    },
    stop: function(){
        console.log(`${this.model} is stopped`);
    },
    jump: function(){
        console.log(`${this.model} is jumping`);
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// the Vehicle base class
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Vehicle(model){
    this.model = model;
}
Vehicle.prototype.drive = driveMixin.drive;
Vehicle.prototype.stop = driveMixin.stop;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The Bike class - inherits from Vehicle
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Bike(model){
    Vehicle.call(this, model)
}
Bike.prototype = Object.create(Vehicle.prototype);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The Car class - inherits from Vehicle
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Car(model){
    Vehicle.call(this, model)
}
Car.prototype = Object.create(Vehicle.prototype);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// make some objects
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var ford = new Car("Ford");
var harley = new Bike("Harley Davidson");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// use the driveMixin:
// first 4 rows are commented, as we moved them to
// Vehicle.prototype
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ford.drive = driveMixin.drive;
// ford.stop = driveMixin.stop;
// harley.drive = driveMixin.drive;
// harley.stop = driveMixin.stop;
harley.jump = driveMixin.jump;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// test the program
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ford.drive(); // 'The ford is driving'
ford.stop();  // 'The ford is stopped'

harley.drive(); // 'Harley Davidson is driving'
harley.stop();  // 'Harley Davidson is stopped'

harley.jump(); // 'Harley Davidson is stopped'
ford.jump();   // Error!
