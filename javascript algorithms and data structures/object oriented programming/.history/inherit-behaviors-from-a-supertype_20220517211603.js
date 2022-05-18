/*
______________________________________________________________
*/
console.log('let\'s start!');
// create a constructor Dog: make it universal pass general params
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
// create new Dog instance for variable terrier
let terrier = new Dog('Jimmy', 'blue');
// check Jimmy the Terrier
console.log(terrier.name, terrier.color, terrier.numLegs);

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

// check
console.log(`Is Duck an instance: ${duck instanceof Animal}, Is Beagle an instance: ${beagle instanceof Animal}`);


