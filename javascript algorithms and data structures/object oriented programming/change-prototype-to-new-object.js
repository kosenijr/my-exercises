/*
Change the Prototype to a New Object

Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

Dog.prototype should be set to a new object.

Dog.prototype should have the property numLegs.

Dog.prototype should have the method eat().

Dog.prototype should have the method describe().
______________________________________________________________
*/
// abbrev logs to console
const log = console.log;
// Dog constructor
function Dog(name) {
    this.name = name;
}
// setup prototype as an object
Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        // log ('grunt ... grunt ...grunt');
        return ('grunt ... grunt ...grunt'); // switch 'log' to 'return' to make usable in rest of code.
    },
    describe: function () {
        // log(`Hi Guys: I would like to introduce you all to ${this.name}. Why does he have ${this.numLegs} legs, because that is common. You ask why he makes the "${this.eat()}" sound when he eats, because he is famished!`);
        return (`Hi Guys: I would like to introduce you all to ${this.name}. Why does he have ${this.numLegs} legs, because that is common. You ask why he makes the "${this.eat()}" sound when he eats, because he is famished!`);

    }
}

// example
let winner = new Dog('Real');
// check wins
// winner.numLegs;
// winner.eat();
// winner.describe();

console.log(winner.describe());
// set it to browser
document.querySelector('#paragraph').innerText = winner.describe();
