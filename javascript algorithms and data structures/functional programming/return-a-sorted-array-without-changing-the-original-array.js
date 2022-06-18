/*
Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

Your code should use the sort method.

The globalArray variable should not change.

nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].

nonMutatingSort(globalArray) should not be hard coded.

The function should return a new array, not the array passed to it.

nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000].

nonMutatingSort([140000, 104, 99]) should return [99, 104, 140000].
________________________________________________________________
*/
// abbrev logs to console
const log = console.log;
log('ready to go!');

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    // create a new array, store old array within, and check.
    const newArr = [...arr];
    log(newArr);
    // implement sort
    arr = newArr.sort((a, b) => a < b ? -1 : 1);
    // log(newArr, globalArray);
    // log(nonMutatingSort([1, 30, 4, 21, 100000]));
    return arr;



    // Only change code above this line
}

nonMutatingSort(globalArray);