/*
Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

mutation(["hello", "hey"]) should return false.

mutation(["hello", "Hello"]) should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

mutation(["Mary", "Army"]) should return true.

mutation(["Mary", "Aarmy"]) should return true.

mutation(["Alien", "line"]) should return true.

mutation(["floor", "for"]) should return true.

mutation(["hello", "neo"]) should return false.

mutation(["voodoo", "no"]) should return false.

mutation(["ate", "date"]) should return false.

mutation(["Tiger", "Zebra"]) should return false.

mutation(["Noel", "Ole"]) should return true.
_________________________________
*/

// setup up variable for console
let cl = console.log;
// start mutation function
function mutation(arr) {
    // set up regex w/ first element of array
    const regex = new RegExp(`[${arr[0]}]`, 'gi');
    // check
    console.log(regex);

    // match regex to second element of array, store in matchNow variable
    const matchNow = arr[1].match(regex);
    // check a few variables and instances to create proper conditions
    cl(matchNow, `matchNow: ${matchNow.length}, regex term: ${arr[1].length}`);
    // create proper condition and set to arr
    arr = matchNow.length === arr[1].length ? true : false;
    // check
    cl(arr);

    return arr;
}
mutation(["hello", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Aarmy"]);
