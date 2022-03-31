/*

*/
// Only change code below this line

class Vegetable{
  constructor(name) {
    this.name = name;
  }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
const spinach = new Vegetable('spinach');
console.log(spinach.name); // should display 'spinach'

class SpaceShuttle {
  constructor(targetPlanet) {
    // this.targetPlanet = targetPlanet;
    this.targetPlanet = targetPlanet
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);