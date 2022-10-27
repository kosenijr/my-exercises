/*
Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
________________________________________________________________
*/
// let statement for console.log abbrev and a spare array
let [log, newarr] = [console.log, []];
function dropElements(arr, func) {
  // log(arr,func(), n)
  // implement for-of loop for array navigation
  for (const elem of arr) {
    // log(elem);
    // condition: where the first true element exists, continue the rest of the array from that element inclusively: if false, return an empty array; then store w/in new array.
    newarr = func(elem) ? arr.splice(arr.indexOf(elem)) : [];
  }
  // log(arr, newarr);
  // restore and return in arr
  // arr = newarr;
    return arr;
}
// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) // should return [3, 4];
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) // should return [1, 0, 1];
// dropElements([1, 2, 3], function(n) {return n > 0;}) // should return [1, 2, 3];
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // should return [];
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // should return [7, 4];
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // should return [3, 9, 2];
