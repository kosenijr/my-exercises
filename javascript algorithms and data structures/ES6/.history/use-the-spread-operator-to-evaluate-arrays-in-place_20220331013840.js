/*

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