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
