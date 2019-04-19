// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Person constructor
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let Person = function(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function(){
  console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old`);
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Manager constructor
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let Manager = function(name, age, managees){
  // reuse the Person Constructor
  Person.call(this, name, age);

  // now set the distinct Manager object properties:
  this.managees = managees || [];
}
// Manager objects will inherit from Person.prototype
Manager.prototype = Object.create(Person.prototype);

// Manager objects can overwrite the Person.greet() method:
Manager.prototype.greet = function(){
  // reuse the Person.prototype.greet:
  Person.prototype.greet.call(this);

  // add some distinct Manager greeting actions:

  let greetMsg = `\tI manage `;

  for(let i=0; i<this.managees.length; i+=1){
    greetMsg += `${this.managees[i].name},`
  }

  console.log(`\t${greetMsg}`);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Developer constructor
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  let Developer = function(name, age, skillset){
    // reuse the Person Constructor
    Person.call(this, name, age);

    // now set the distinct Developer object properties:
    this.skillset = skillset || [];
  }
  // Developer objects will inherit from Person.prototype
  Developer.prototype = Object.create(Person.prototype);

  // Developer objects can overwrite the Person.greet() method:
  Developer.prototype.greet = function(){
    // reuse the Person.prototype.greet:
    Person.prototype.greet.call(this);

    // add some distinct Developer greeting actions:
    console.log(`\tI know ${this.skillset.join()}`);
  }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create some Developer and Manager objects:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Developer instance
let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instance
let gates = new Manager('Bill Gates', 43, [maria, pesho]);

// use the objects:
maria.greet();
pesho.greet();
gates.greet();
