/*

*/
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let k = 0; k < arr.length; k++) {
    for (let p = 0; p < arr[k].length; p++) {
      product *= arr[k][p];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);