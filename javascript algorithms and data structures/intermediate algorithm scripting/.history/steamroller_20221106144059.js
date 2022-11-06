/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
________________________________________________________________
*/
// abbrev logs to console
const log = console.log;
// function to remove brackets and return arr
function steamrollArray(arr) {
    // for loop navigation
    for (let k = 0; k < arr.length; k++) {
        // log(arr[k]);
        arr.map(elem => Array.isArray(arr[k]) ? arr.splice(arr.indexOf(arr[k]), 1, ...arr[k].concat()) : null);
        arr.map(elem => Array.isArray(arr[k]) ? arr.splice(arr.indexOf(arr[k]), 1, ...arr[k].concat()) : null);
    }
    log(arr);
    return arr;
}

// tests
steamrollArray([[["a"]], [["b"]]])
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]])
// // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]])
// // should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]])
// // should return [1, {}, 3, 4].