/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

sumFibs(1) should return a number.

sumFibs(1000) should return 1785.

sumFibs(4000000) should return 4613732.

sumFibs(4) should return 5.

sumFibs(75024) should return 60696.

sumFibs(75025) should return 135721.
________________________________________________________________
*/
// abbrev logs to console, then check.
const log = console.log;
// create an arr with 1 as an element and one variable with the assignment of zero.
let [arr, iV] = [[1], 0];
// log(arr, iV);
// create function to sum up fibonacci numbers
function sumFibs(num) {
    // log(num); // check num
    // start gathering numbers by making a formula: consider the reduce method, with an initial value (iV).
    // for loop iteration
    for (let cV = 0; cV < num; cV++) {
        // arr.push(arr.reduce((pV, cV) => pV + cV));
        // log(arr[0], cV, arr.at(-1));
        // log(cV + arr.at(-1));

    }

    log(arr)





    return num;
}

sumFibs(4);