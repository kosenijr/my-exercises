/*
______________________________________________________________
*/
// abbrev logs to console, confirm readiness
const log = console.log;
log('ready to go!');
// ___________________________________________________________
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

