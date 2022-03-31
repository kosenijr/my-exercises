/*
Use the Spread Operator to Evaluate Arrays In-Place

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximus would have a value of 89.

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr;
Copy all contents of arr1 into another array arr2 using the spread operator.

arr2 should be correct copy of arr1.

... spread operator should be used to duplicate arr1.

arr2 should remain unchanged when arr1 is changed.
________________________________________________________________________________
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);



/*
NOTES
- to reuse an array, just declare a variable (i.e. const arr2; ), then assign the previous array (within brackets and in spread operator form) to the variable (i.e. arr2 = [...arr1]). 
________________________________________________________________________________
SPREAD OPERATOR

If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.:

function sum(x, y, z, n) {
  return x + y + z + n;
}
Copy to Clipboard
The above example is somewhat rigid; the real value in spread syntax is that it works with the same value, no matter how many elements are contained in the object, array, etc.

It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
Copy to Clipboard
In the above example you can rerun the last line as many times as you like, to keep adding an additional 12 to the end of the array.

________________________________________________________________________________

DOES WORK IN THIS ACTIVITY, 
HOWEVER SPREAD OPERATOR NOT USED

The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

Ex 1:

const arr1 = ['bayode', 'pura', 'abeni', 'kayode'];
const arr2 = Array.from(arr1);

console.log(arr2);
// expected output: Array ['bayode', 'pura', 'abeni', 'kayode']

Ex 2: 
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
*/