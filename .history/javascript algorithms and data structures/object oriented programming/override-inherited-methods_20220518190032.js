/*
______________________________________________________________
*/
// abbrev logs to console, confirm readiness
const log = console.log;
log('ready to go!');
// ___________________________________________________________
// Testing
/*
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype); // Bird.prototype.constructor autos to Animal
console.log(Bird.prototype.constructor); // Animal
Bird.prototype.constructor = Bird; // value of Bird.prototype.constructor now reassigned.
console.log(Bird.prototype.constructor); // Bird
*/
// ___________________________________________________________
/*
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.'

*/
// supertype Animal constructor
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
// inheritance from Animal and check
Dog.prototype = Object.create(Animal.prototype);
// log(Dog.prototype);
// set Dog's constructor to Dog and check
Dog.prototype.constructor = Dog;
// log(Dog.prototype.constructor);

// setup bark function for Dog object
Dog.prototype.bark = function () { console.log ("Woof!") }; // can use return instead of console.log in other contexts and for better effect.

// Only change code above this line

let beagle = new Dog();
console.log(beagle, beagle.bark());

