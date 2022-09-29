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
________________________________________________________________
*/


// declare log and an empty general array, composite array, and prime array.
let [log, arrG, arrC, arrP] = [console.log, [], [], []];
// function to sum up primes
function sumPrimes(num) {
    // multidimensional for loops
    // first layer
    for (let k = 2; k <= num; k++) {
        arrG.push(k);
        // use map method
        arr.map(elem => (k % elem === 0) && (b !== 1 && b !== elem) ? arrC.push(k) : null);
        // compose prime algorithm
        // (k % b === 0) && (b !== 1 && b !== k) ? arrC.push(k) : null;
        // log(arrG, arrC);
        arrP = arrG.filter(elem => !arrC.includes(elem) ? elem : null);
        // log(arrP);
    }
    log(arrP);
}
// reduce method
num = arrP.reduce((prevVal, currVal) => prevVal + currVal);

log(num);
return num;
}

sumPrimes(10) // should return 17.
// sumPrimes(977) // should return 73156.