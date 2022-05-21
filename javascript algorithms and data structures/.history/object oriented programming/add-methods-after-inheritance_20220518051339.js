/*

______________________________________________________________
*/
// abbrev logs to console, confirm readiness
const log = console.log;
log('ready to go!');
// ___________________________________________________________

// Animal supertype (parent) constructor
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
// assignment using new method
let duck = new Bird();
let beagle = new Dog();

// reset constructors:
// Bird
Bird.prototype.constructor = Bird;
// Dog
Dog.prototype.constructor = Dog;

// log instances
log(`duck instance: ${duck instanceof Bird}: ${duck.constructor}, beagle instance: ${beagle instanceof Dog}: ${beagle.constructor}`);
