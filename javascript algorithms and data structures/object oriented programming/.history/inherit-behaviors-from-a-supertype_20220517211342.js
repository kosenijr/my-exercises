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


