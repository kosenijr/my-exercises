/*
NOTES
- where you can't use splice for adding arrays, declare array in the front.
*/

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
/*
// abbrev. logs to console
const log = console.log;
// initially populate array with two elements of 1.
let arr = [1, 1];
// create initial function to sum up Fibonacci numbers
const sumFibs = (num) => {
    // check num
    // log(num);
    // try a do...while statement: s
    do { arr.push(arr.at(-2) + arr.at(-1)) } while (arr.at(-1) <= num);
    // returned numbers that summed up; included a number past each limit
    // adding up all numbers that are odd and with range: use filter and reduce methods
    arr = arr.filter(elem => (elem <= num) && (elem % 2 === 1) ? elem : null);
    // where you can't use splice for adding arrays, declare array in the front.
    // add up all the elements with reduce method
    num = arr.reduce((prev, curr) => prev + curr); 
    // check sum
    log(arr, num)
    // 
    return num
}
*/
// ---------------------------------------------
// concise the code
let [log, arr] = [console.log, [1, 1]];
const sumFibs = (num) => {
    do { arr.push(arr.at(-2) + arr.at(-1)) } while (arr.at(-1) <= num);
    arr = arr.filter(elem => (elem <= num) && (elem % 2 === 1) ? elem : null);
    num = arr.reduce((prev, curr) => prev + curr);
    return num
}

// Tests
// sumFibs(1) // should return a number.
// sumFibs(1000) // should return 1785.
// sumFibs(4000000) // should return 4613732.
// sumFibs(4) // should return 5.
// sumFibs(75024) // should return 60696.
// sumFibs(75025) // should return 135721.
sumFibs(10) // should return 10.