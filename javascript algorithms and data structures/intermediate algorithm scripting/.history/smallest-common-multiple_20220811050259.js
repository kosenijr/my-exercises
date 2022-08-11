/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.
________________________________________________________________
*/
// create function for least common multiple
function smallestCommons(arr) {
    // declare log and destructure arr, then check.
    let [log, newarr, [min, max]] = [console.log, [], arr];
    // log(arr);
    // sort array correctly
    // arr = [min, max].sort((a, b) => a - b); //does not work correctly
    [min, max] = arr.sort((a, b) => a - b); // works correctly
    // log(arr, min, max)
    // for loop for navigation
    for (let b = min; b <= max; b++) {
        newarr.push(b);
    }
    // log(newarr);
    // find lcm of newarr
    log(newarr);
    // forEach method
    // newarr.forEach(elem => (elem / 2) === 0 ? newarr = newarr.splice(newarr.indexOf(elem), 1, (elem / 2)) : null);
    newarr.forEach(elem => log(elem / 2) === 0 

    log(newarr);


    // return num
}

// smallestCommons([1, 5]) // should return 60.
// smallestCommons([5, 1]) // should return 60.
// smallestCommons([2, 10]) // should return 2520.
// smallestCommons([1, 13]) // should return 360360.
smallestCommons([23, 18]) // should return 6056820.