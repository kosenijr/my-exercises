
/*
 
*/

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) { // we use 0 in the base case bc plug-in arr[-1] cannot be evaluated.
    return 0
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}