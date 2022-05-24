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
// main function
function chunkArrayInGroups(arr, size) {
    // abbrev log to console, setup frequency and store, new arr
    const log = console.log;
    const freq = Math.ceil(arr.length / size);
    // check
    // log(freq);
    // newarr var
    let newarr = [];
    // store var
    let temp;
    // use for loop to navigate 
    for (let k = 0; k < freq; k++) {
        //  k represents each subarray b/c of for-loop context and quantifiable relationship with respect to freq.
        // if the value of size remains true as k iterates ...
        if (size) {
            // log frequency and size
            log(`freq: ${freq}, size: ${size}`)
            // also remove characters ranging from 0 to the numerical value of size, then store in temp variable
            temp = arr.splice(0, size);
            // check temp
            log(temp);
            // push temp value into our new array
            newarr.push(temp);
            // segues to next iteration
        }
    };
    // check newarr
    log(newarr);
    arr = newarr;
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// return [["a", "b"], ["c", "d"]]

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
  // return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]