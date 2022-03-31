
ate a recursive function to solve a problem.
 should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.



such as forEach, map, filter, or reduce).









/*

*/

function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum) {
    // rangeOfNumbers(startNum, endNum - 1);
    const arrayInt = rangeOfNumbers(startNum, endNum - 1);
    arrayInt.push(endNum);
    console.log(arrayInt);
    return arrayInt
  }
  return []
}
