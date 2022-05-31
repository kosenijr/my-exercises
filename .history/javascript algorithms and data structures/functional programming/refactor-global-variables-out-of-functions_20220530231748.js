/*
Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
 
bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

add(bookList, "A Brief History of Time") should return ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

remove(bookList, "On The Electrodynamics of Moving Bodies") should return ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].

remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"); should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
________________________________________________________________
*/
// _____________________________________________________________
// abbrev log to console, check
const log = console.log;
log('ready to go!');
// _____________________________________________________________
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(oldList, bookName) {
    // create an array
    let newList = [];
    newList.push(...oldList, bookName); // use push method and spread operator to make new and old lists completely distinct: comma breaks sequence of push action: first original list then the addition
    // console.table(newList); // new list takes the onus of modification from old list
    // console.table(oldList); // original list remains unchanged
    return newList;

    // Change code above this line
}
// Change code below this line
function remove(oldList, bookName) {
    const book_index = oldList.indexOf(bookName);
    if (book_index >= 0) { //condition to target specific index within array
        // create a new array
        let newList = [];
        // push method and spread operator
        newList.push(...oldList); // redundant
        // console.table(newList); // copy of old list

        newList.splice(book_index, 1);
        // log(newList); // reflects removal
        // log(oldList); // original list remains unchanged.
        return newList;

        // Change code above this line
    }
}
// add
// add(bookList, 'Harry Potter and the Goblet of Fire')
// log(add(bookList, 'Harry Potter and the Goblet of Fire'));

// remove
// remove(bookList, "On The Electrodynamics of Moving Bodies");
// log(remove(bookList, "On The Electrodynamics of Moving Bodies"));

// curve
log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));

// log(remove(bookList, "On The Electrodynamics of Moving Bodies"));