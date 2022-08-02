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
/*
// abbrev. logs to console
const log = console.log;
// create an empty array
// let [arr, initVal] = [[1, 1], 0];
// log(arr, initVal); // logs an empty array and an initial value of 1.
// create function to produce, store, and add Fibonacci numbers that are <= num
const sumFibs = (num) => {
    // start gathering numbers by making a formula; consider reduce
    // first include initial value to arr, then check.
    // arr.map(curr => curr <= num ? arr.push(arr.reduce((prev, curr) => prev + curr)) : null);

    // check arr
    log(arr)
    // 
    return num
}
*/
// ---------------------------------------------
// abbrev. logs to console
const log = console.log;
// initially populate array with an element of 1.
let arr = [1];
const sumFibs = (num) => {
    // for loop that populates array.
    for (let b = 1; b <= num; b++) {
        arr.push(b);

    }

    // check arr
    log(arr)
    // 
    return num
}

// Tests
// sumFibs(1) // should return a number.
// sumFibs(1000) // should return 1785.
// sumFibs(4000000) // should return 4613732.
sumFibs(4) // should return 5.
// sumFibs(75024) // should return 60696.
// sumFibs(75025) // should return 135721.