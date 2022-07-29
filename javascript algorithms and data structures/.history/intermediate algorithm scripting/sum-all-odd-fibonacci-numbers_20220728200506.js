

// abbrev. logs to console
const log = console.log;
// create an empty array
const arr = [];
// create initial value
const initVal = 1;
// create function to produce, store, and add Fibonacci numbers that are <= num
const sumFibs = (num) => {
    // start gathering numbers by making a formula; consider reduce
    // first include initial value to arr, then check.
    arr.length === 0 ? arr.push(initVal) : null;
    // log(arr); // logs arr element value 1.
    // second, use reduce formula to create Fibonacci pattern
    arr.reduce((prevVal, currVal) => (prevVal + currVal), initVal);
    log(arr);
    // 
    // check arr
    // log(arr)
    // 
    // 
    // 
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