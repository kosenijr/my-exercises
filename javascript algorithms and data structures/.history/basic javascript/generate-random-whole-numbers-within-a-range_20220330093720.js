
/*

*/

function randomRange(myMin, myMax) {
  // Only change code below this line
  console.log(
    myMin,
    '\n',
    myMax,
    '\n  ', 
    (myMax - myMin + 1) + myMin,
    '\n    ', 
    (myMax - myMin + 1) + myMin,
    '\n      ',
    Math.random(),
    '\n       ',
    (Math.random() * (myMax - myMin + 1)),
    '\n        ',
    (Math.random() * (myMax - myMin + 1)) + myMin
     
  

  )

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

  // Only change code above this line
}