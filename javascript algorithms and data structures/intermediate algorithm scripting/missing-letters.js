/*
NOTES
  *****Placement of functions
    - make sure that the placement of the function, within the code, is not the problem
*/


/*
// Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
________________________________________________________________
*/
// abbrev logs to console, then check.
const log = console.log;
log('let\'s code!');

// create function 
function fearNotLetter(str) {
    // check string
    // log(str);
    // create alphabet array and convert string to arr
    let [alphabet, arr] = ['abcdefghijklmnopqrstuvwxyz'.split(''), str.split('')];
    // check alphabet
    // log(alphabet, str);
    // check arr
    // log(arr);

    // compare string and alphabet
    // alphabet.map(elem => log(elem, arr, arr.indexOf(elem))); // logs a -1 within the range of positive numbers that signifies the elem that needs to be returned.
    // arr.map(elem => log(elem, alphabet, alphabet.indexOf(elem))); // logs the sequential numbers with one missing: the elem that needs to be returned.

    // ternary condition
    // arr.filter(elem => log(elem, alphabet.includes(elem), alphabet.indexOf(elem), ));

    // another condition to make instances of all matching letters undefined.
    // str = (alphabet.length === arr.length) ? undefined : null;
    // Placement of functions
    // make sure that the placement of the function, within the code, is not the problem
    // here, code is nullified or undefined to start. This eliminates arrays with a complete letter set from consideration.

    str = (alphabet.length === arr.length) ? undefined : null;

    // create an interval with alphabet array wrt, use indexOf method to track and narrow down the letter that does not match the alphabet-arr comparison
    alphabet.forEach(elem => ((alphabet.indexOf(elem) > alphabet.indexOf(arr[0]) && alphabet.indexOf(elem) < alphabet.indexOf(arr.at(-1))) && (arr.indexOf(elem) === -1)) ? str = elem : null); // will have to use slice/splice as truthy for ternary condition : falsy will be null.

    // check arr
    log(str)
    // return str
    return str;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");