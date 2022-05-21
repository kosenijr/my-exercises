/*
______________________________________________________________
*/
console.log('hi');
// create object by using constructor
let dog = {
    name: 'Spot',
    numLegs: 4,
    sayLegs: function () { return `This dog has ${this.numLegs} legs.` }
};
// call function
// dog.sayLegs();
console.log(dog.sayLegs());