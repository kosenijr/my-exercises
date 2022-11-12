/*
NOTES
- 
*/

/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
________________________________________________________________
*/

/*
Prime numbers are:
- greater than 1
- only factors are 1 and itself
- no square roots
 */

/*
Composite numbers are:
- have more than two factors
- show divisibility by more than two numbers: 
*/

/*
// abbrev logs to console and set up an empty array
let [log, arr] = [console.log, []];
// log(arr);
function sumPrimes(num) {
    // prime inner function
    // for loop extension
    for (let b = 1; b <= num; b++) {
        // push b into the array. then check.

        // check if a number has a factor
        (num % b === 0) ? null : log(b);

    }
    // check array
    log(arr);

    // return num
    return num;
}

sumPrimes(10) // should return 17.
// sumPrimes(30)
// sumPrimes(977) // should return 73156.
*/

/*
NOTES
- 
*/

/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
________________________________________________________________
*/

/*
// declare log and an empty general array, composite array, and prime array.
let [log, arrG, arrC, arrP] = [console.log, [], [], []];
// function to sum up primes
function sumPrimes(num) {
    // multidimensional for loops
    // first layer
    for (let k = 2; k <= num; k++) {
        arrG.push(k);
        // second layer
        for (let b = 1; b <= num; b++) {
            // check variables
            // log(k, b)
            // compose prime algorithm
            (k % b === 0) && (b !== 1 && b !== k) ? arrC.push(k) : null;
            // log(arrG, arrC);
            arrP = arrG.filter(elem => !arrC.includes(elem) ? elem : null)
            // log(arrP);
        }
        log(arrP);
    }
    // reduce method
    num = arrP.reduce((prevVal, currVal) => prevVal + currVal);

    log(num);
    return num;
}

*/
// _________________________________________________________________________
/*
// declare log and an empty general array, composite array, and prime array.
let [log, arrG, arrC, arrP] = [console.log, [], [], []];
// function to sum up primes
function sumPrimes(num) {
    // multidimensional for loops
    // first layer
    for (let k = 2; k <= num; k++) {
        arrG.push(k);
        // use map method
        arrG.map(elem => (k % elem === 0) && (elem !== 1 && elem !== k) ? arrC.push(k) : null);
        // compose prime algorithm
        // (k % b === 0) && (b !== 1 && b !== k) ? arrC.push(k) : null;
        // log(arrG, arrC);
        arrP = arrG.filter(elem => !arrC.includes(elem) ? elem : null);
        // log(arrP);
    }
    log(arrP);
    // reduce method
    num = arrP.reduce((prevVal, currVal) => prevVal + currVal);

    log(num);
    return num;
}
*/
// _________________________________________________________________________
/*
// declare log and an empty general array, and composite array.
let [log, arr, arrComp] = [console.log, [], []];
// function to sum up primes
function sumPrimes(num) {
    // multidimensional for loops
    // first layer
    for (let k = 2; k <= num; k++) {
        // push numeric values into array general.
        arr.push(k);
        // use map method to store composite array.
        arr.forEach(elem => (k % elem === 0) && (elem !== 1 && elem !== k) ? arrComp.push(k) : null);
        // check conposite array.
        log(arrComp); // logs an array of composite values from array general.
        // compose prime algorithm
        // (k % b === 0) && (b !== 1 && b !== k) ? arrC.push(k) : null;
        // log(arrG, arrC);
        arr = arr.filter(elem => !arrComp.includes(elem) ? elem : null);
        // check array general.
        log(arr); // returns prime numbers within preferred range.
    }
    // reduce method to add up values, restore within num.
    num = arr.reduce((prevVal, currVal) => prevVal + currVal);

    log(num);
    return num;

}
// sumPrimes(10) // should return 17.
    // sumPrimes(977) // should return 73156.
*/
// __________________________________________________________________
function smallestCommons(arr) {
    // declare log and destructure arr, then check.
    let [arrMain, [min, max], arrPrime, arrPrior, arrFirst, arrSecond, arrThird, arrCompiled, arrPriorComp, log, num] = [[], arr, [], [], [], [], [], [], [], console.log];
    // reinforce the proper and sequential min and max values.
    [min, max] = arr.sort((a, b) => a - b); // works correctly
    // ---------------------------------
    // place 1st for loop here to ensure proper max.
    for (let k = 2; k <= max; k++) {
      // push k into arrPrior then check
      arrPrior.push(k);
      // log(arrPrior);
      // ---------------------------------
      // composite: no remainder and elem does not equal 1 or itself, push into composite array
      arrPrior.forEach((elem) => k % elem === 0 && elem !== 1 && elem !== k ? arrPriorComp.push(k) : null);
      // filter non-composite numbers into arrPrime
      arrPrime = arrPrior.filter((elem) => !arrPriorComp.includes(elem) ? elem : null);
      // ---------------------------------
    }
    for (let b = min; b <= max; b++) {
      // push b into arrMain to create a numerator array
      arrMain.push(b);
    };
    for (const den of arrPrime) {
      arrMain.map(num => Number.isInteger(num / den) && !arrFirst.includes(den) ? arrFirst.push(den) : null);
      log(`arrFirst: ${arrFirst}`);
      arrMain.map(num => Number.isInteger((num / den) / den) && (((num / den) % den) === 0) && !arrSecond.includes(den) ? arrSecond.push(den) : null);
      log(`arrSecond: ${arrSecond}`);
      arrMain.map(num => ((((num / den) / den) % den) === 0) && !arrThird.includes(den) ? arrThird.push(den) : null);
      log(`arrThird: ${arrThird}`);
    }
    arrCompiled = [...arrFirst, ...arrSecond, ...arrThird];
    log(arrCompiled);
    // use reduce
    num = arrCompiled.reduce((prev, curr) => prev * curr)
    // ---------------------------------
    // check then return num
    log(num);
    return num
  }
  // ---------------------------------
  // smallestCommons([1, 5]) // should return 60.
  // smallestCommons([5, 1]) // should return 60.
  // // [2, 2, 3, 5]
  // smallestCommons([2, 10]) // should return 2520.
  // // [2, 2, 2, 3, 3, 5, 7]
  // smallestCommons([1, 13]) // should return 360360.
  // // [2, 2, 2, 3, 3, 5, 7, 11, 13]
  // smallestCommons([23, 18]); // should return 6056820.
  // [2, 2, 3, 3, 5, 7, 11, 19, 23]
sumPrimes(10) // should return 17.
sumPrimes(977) // should return 73156.