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