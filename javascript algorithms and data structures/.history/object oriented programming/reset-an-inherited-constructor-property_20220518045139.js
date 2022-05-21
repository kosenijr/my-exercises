/*

______________________________________________________________
*/
// abbrev logs to console, confirm readiness
const log = console.log;
log('ready to go!');
// ___________________________________________________________

// Animal supertype (parent) constructor
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line

// Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype)

// new method used to assign Dog props to beagle
let beagle = new Dog();

// check instance
console.log(Dog.prototype instanceof Animal)