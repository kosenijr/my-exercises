/*

*/

// Only change code below this line
function countdown(n){
  if (n >= 1) {
    const countArray = countdown(n - 1);
    // console.log(countdown(n - 1)); // infinite loop
    // countArray.push(n); // for forward arrays
    countArray.unshift(n); // for reversed arrays
    return countArray

  } else {
    return []
  }
}
console.log(
  countdown(5),
  `\n`,
  countdown(10),
  `\n`,
  countdown(15),
  `\n`,
  countdown(20)
  );

// Only change code above this line