/*
Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].

The first array should remain the same after the function runs.

The second array should remain the same after the function runs.
________________________________________________
*/

function frankenSplice(arr1, arr2, n) {
    // activity requires that the integrity of arr1 and arr2 be intact: therefore, create and use an arr3 to duplicate arr2.
    // pay close attention to the use of the ellipses: it allows arr2 and arr3 to remain unchanged for the purpose of this activity 
    let arr3 = [...arr2];
    // console.log(arr3);
    arr3.splice(n, 0, arr1);
    // console.log(arr2);
    arr3 = arr3.flat();
    // console.log(arr1, arr2);
    // console.log(arr1.length)
    // arr2 = arr2.splice(n, arr2.indexOf(arr1));
    console.log(arr2);
    console.log(arr3);
    return arr3;
}




frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3, 4], [], 0);
