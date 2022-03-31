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