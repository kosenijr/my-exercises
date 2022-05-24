/*
Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
______________________________________________________
*/
// variables
// abbrev log to console, check
const log = console.log;
log('ready to go!');
// create a new array
let newarr = [];
// create new variable for future storage
let recyclarr;
// main function
function chunkArrayInGroups(arr, size, newarr, freq, temp) {
    // abbrev log to console, setup frequency and store, new arr
    const log = console.log;
    freq = Math.ceil(arr.length / size);
    // newarr var
    newarr = [];
    // use for loop to navigate
    for (let k = 0; k < freq; k++) {
        if (size) {
            temp = arr.splice(0, size)
            newarr.push(temp);
        }
    };
    // check newarr
    log(newarr);
    arr = newarr
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
