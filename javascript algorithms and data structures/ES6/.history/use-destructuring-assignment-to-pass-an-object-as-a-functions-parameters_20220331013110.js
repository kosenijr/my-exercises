/*

*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line

// replace stats with destructuring assignments: max, min
const half = ({max, min}) => {
// console.log(max, min);
  return (max + min) / 2.0;

}
// calling half with stats parameter will trigger array-specific elements requested
half(stats);
// check
console.log(half(stats))

// Only change code above this line