/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.

myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
________________________________________________________________
*/

/*
// const log = console.log;
// log('let\'s code!');
// function myReplace(str, before, after) {

//     /*
//     -each variable, i.e. before & after, are one-word strings
//     -replace method must be used with the string
//     -if the first character of before or after are Uppercase(), then both terms should be capitalized
//      */

//     // exp
//     // check
//     log(
//         // before[0],
//         // before.slice(1),
//         // after[0],
//         // after.slice(1),
//         // after[0].toUpperCase().concat(after.slice(1))
//     );
//     // conditions
//     // Variable after's first char of should be uppercase, since variable before's first char is the same.
//     str = before[0] === before[0].toUpperCase() ? str.replace(before, after[0].toUpperCase().concat(after.slice(1))) : str.replace(before, after[0].toLowerCase().concat(after.slice(1)));
//     // Vice versa of previous condition
//     log(str);




//     return str;
// }
// _____________________________________________________________
// concise the code.
const log = console.log;
log('let\'s code!');
function myReplace(str, before, after) {
    str = before[0] === before[0].toUpperCase() ? str.replace(before, after[0].toUpperCase().concat(after.slice(1))) : str.replace(before, after[0].toLowerCase().concat(after.slice(1)));
    log(str);
    return str;
}
// ______________________________________________________________________
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // should return the string A quick brown fox leaped over the lazy dog.
myReplace("Let us go to the store", "store", "mall") // should return the string Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // should return the string He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") // should return the string I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") // should return the string This has a spelling error.
myReplace("His name is Tom", "Tom", "john") // should return the string His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") // should return the string Let us get back to more Algorithms.