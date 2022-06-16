/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.
________________________________________________________________
*/
// abbrev logs to console. then check.
const log = console.log;
log('let\'s rock');

// complex sum function
// function sumAll(arr) {
//   // sort arr sequentially. then check.
//   arr = arr.sort((a, b) => a - b);
//   console.log(arr);
//   // for loop for activity-defined sum
//   let sum = 0;
//   for (let k = arr[0]; k <= arr[1]; k++) {
//     sum += k;
//     // log(sum);
//   }
//   log(sum);
//   return sum;
// }

// __________________________________________________________________-

function sumAll(arr, sum = 0) {
    arr = arr.sort((a, b) => a - b);
    for (let k = arr[0]; k <= arr[1]; k++) { sum += k }
    return sum;
}

// __________________________________________________________________-

sumAll([1, 4]);
// sumAll([10, 5]);
// sumAll([4, 1]);
// sumAll([5, 10]);