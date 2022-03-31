Use getters and setters to Control Access to an Object

You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

/*

*/
// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this.celsius = (5 / 9) * (temperature - 32);
  }
  // getter
  get temperature() {
    return this.celsius;
  }
  // setter
  set temperature(updatedCelsius) {
    this.celsius = updatedCelsius;
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
console.log(thermos);
temp = thermos.temperature; // 26 in Celsius