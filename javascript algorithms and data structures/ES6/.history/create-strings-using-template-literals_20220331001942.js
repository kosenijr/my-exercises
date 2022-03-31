/*

*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  let failureItems = [];
  // create for loop for failure subarray
  for (let k = 0; k < arr.length; k++) {
    const lines = `<li class="text-warning">${arr[k]}</li>`;
    failureItems.push(lines);
    console.log(failureItems);
  }
  // Only change code above this line
  return failureItems;
}
// console.log(makeList(result.failure));
const failuresList = makeList(result.failure);


/* NOTES
- when using html within js, remember to include "/" (forward slash) in all closing tags.
*/