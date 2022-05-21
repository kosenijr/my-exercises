/*
______________________________________________________________
*/

console.log('hey');
// create object by using constructor
let dog = {
  name: 'Spot',
  numLegs: 4,
  sayLegs: () => `This dog has ${dog.numLegs} legs.`
};
// call function
dog.sayLegs(dog);
console.log(dog.sayLegs());