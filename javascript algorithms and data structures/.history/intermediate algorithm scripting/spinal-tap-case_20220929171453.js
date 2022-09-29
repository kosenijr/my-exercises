/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.

spinalCase("AllThe-small Things") should return the string all-the-small-things.
________________________________________________________________
*/
// abbrev logs to console. then check.
const log = console.log;
log('ready to go!');
// create a function: returns lowercase statements with dashes
// ____________________________________________________________________________________________
/*
function spinalCase(str) {
    // rewrite regex to include a comma then capitalized letter for the purpose of arr. check.
    let regex = /[A-Z]/g;
    // log(regex);

    // matches and check
    let matches = str.match(regex);
    // log(matches);

    // make str an array and use spread operator. store in array. then check.
    let arr = [...str];
    // log(arr); // logs str-converted array and the comma breaks of
    // --------------------------------------------------------------------------
    // use forEach method to modify arr
    // matches
    matches.forEach(elem => arr.indexOf(elem) ? arr.splice(arr.indexOf(elem), 0, ' ') : null);
    // --------------------------------------------------------------------------
    // check arr
    // log(arr);
    // turn arr back to a string. then check.
    str = arr.join('');
    // set up regex for replace method
    regex = /\s\s|_\s|\s/g;
    str = str.replace(regex, '-');
    str = str.toLowerCase();
    log(str);
    return str

}
*/
// ____________________________________________________________________________________________

/*
function spinalCase(str) {
    // rewrite regex to include a comma then capitalized letter for the purpose of arr. check.
    // matches and check.
    let matches = str.match(/[A-Z]/g);
    // log(matches);
    // make str an array and use spread operator.
    let arr = [...str];
    // matches-lead ternary condition
    matches.forEach(elem => arr.indexOf(elem) ? arr.splice(arr.indexOf(elem), 0, ' ') : null);


    // turn arr back to a string. then check.
    str = arr.join('');
    // set up regex for replace method
    str = str.replace(/\s\s|_\s|\s/g, '-').toLowerCase();
    log(str);

    return str;

}
*/

// ____________________________________________________________________________________________
// concise
function spinalCase(str) {
    let matches = str.match(/[A-Z]/g);
    let arr = [...str];
    matches.forEach(elem => arr.indexOf(elem) ? arr.splice(arr.indexOf(elem), 0, ' ') : null);
    str = arr.join('').replace(/\s\s|_\s|\s/g, '-').toLowerCase();
    log(str);
    return str;
}
// ____________________________________________________________________________________________

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
