/*
______________________________________________________________
*/
console.log('let\'s start!');
// create a constructor
function Dog(name) {
    this.name = name;
}
//   setting up prototype
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");
// check prototype
console.log(
    beagle.numLegs,
    Dog.prototype.numLegs
)