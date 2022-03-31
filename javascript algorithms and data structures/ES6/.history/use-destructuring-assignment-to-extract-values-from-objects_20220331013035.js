/*

*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

/*_________________________________________________________________________________________________________________*/

// streamline
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(
  `today: ` + today,
  `\n`,
  `tomorrow: ` + tomorrow);

// Only change code above this line

/*
NOTES
- very efficient in streamlining variables within object.
*/