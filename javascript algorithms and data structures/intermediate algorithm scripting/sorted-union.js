/*
DON'T FORGET THE USE OF THE ARGUMENTS OBJECT FOR FUNCTION PARAMS
 */

/*
Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].

uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
________________________________________________________________
*/

/*
// abbrev logs to console. then check.
const log = console.log;
log('let\'s go!');
// create a function: takes two or more arrays and returns one unique array
// be sure to include spread operator and new variable to represent multiple-array parameter
function uniteUnique(arr) {
    // combine all arrays within param, restore in arguments
    let args = [...arguments].flat();
    // log(args, Array.isArray(args)); // is in fact an array
    // set up for loop for arr navigation
    for (let k = 0; k < arr.length; k++) {
        // compare iterator/indices to the result of the indexOf method
        // log(arr[k], k === arr.indexOf(arr[k])) // got a falsy for the duplicate
        k === arr.indexOf(arr[k]) ? null : arr.splice(arr[k]); // possible counter-duplication solution
    }

    // ternary condition(s)
    args.map(elem => arr.indexOf(elem) === -1 ? arr.push(elem) : null);
    // check arr
    log(arr);


    return arr;
*/
// ______________________________________________________________
// Concise

// abbrev logs to console. then check.
const log = console.log;
function uniteUnique(arr) {
    let args = [...arguments].flat();
    for (let k = 0; k < arr.length; k++) { k === arr.indexOf(arr[k]) ? null : arr.splice(arr[k]) }
    args.map(elem => arr.indexOf(elem) === -1 ? arr.push(elem) : null);
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);