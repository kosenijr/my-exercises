/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.
________________________________________________________________



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

let [log, arrPrior, arrPriorComp] = [console.log, [], []];
let num = 10;
function sumPrimes(num) {
    for (let k = 2; k <= num; k++) {
        arrPrior.push(k);
        arrPrior.forEach(elem => (k % elem === 0) && (elem !== 1 && elem !== k) ? arrPriorComp.push(k) : null);
        arrPrior = arrPrior.filter(elem => !arrPriorComp.includes(elem) ? elem : null);
    }
    num = arrPrior.reduce((prevVal, currVal) => prevVal + currVal);

}



// create function for least common multiple
function smallestCommons(arr) {
    // declare log and destructure arr, then check.
    // let [log, newarr, [min, max], arrComp] = [console.log, [], arr, []];

    let [newarr, [min, max], arrTimes] = [[], arr, []];


    // log(arr);
    // sort array correctly
    // arr = [min, max].sort((a, b) => a - b); //does not work correctly
    [min, max] = arr.sort((a, b) => a - b); // works correctly
    // log(arr, min, max)
    // for loop for navigation
    for (let b = min; b <= max; b++) {
        newarr.push(b);
        // log(newarr);
        // find lcm of newarr
        // log(newarr);
        // forEach method
        // testing
        // newarr.forEach(elem => log(elem, 2, Number.isInteger(elem / 2)))
        // checking for integers within newarr with various denominators
        // log(newarr);
        // newarr.forEach(elem => Number.isInteger(elem / 2) ? newarr.splice(newarr.indexOf(elem), 1, (elem / 2)) : null);

        // make b a prime number before push within new array

        // newarr.forEach(elem => Number.isInteger(b / elem) ? log(b) : null);

        // log(newarr);
        // log(arrComp);
        // arr = arr.filter(elem => !arrComp.includes(elem) ? elem : null);

        sumPrimes(max);
        // log(arrPrior);

        arrPrior.forEach(elem => Number.isInteger(b / elem) ? arrTimes.push(elem) : null);

    }

    log(arrTimes);


    


    // num = arr.reduce((prevVal, currVal) => prevVal + currVal);

    // share b within array with ternary condition.
    // newarr.forEach(elem => Number.isInteger(elem / b) ? newarr.splice(newarr.indexOf(elem), 1, (b)) : null);


    /* Will have to find a way to change the denominator to run array numbers until they reach one. */


    // log(newarr);


    // return num
}

smallestCommons([1, 5]) // should return 60.
// smallestCommons([5, 1]) // should return 60.
// smallestCommons([2, 10]) // should return 2520.
// smallestCommons([1, 13]) // should return 360360.
// smallestCommons([23, 18]) // should return 6056820.