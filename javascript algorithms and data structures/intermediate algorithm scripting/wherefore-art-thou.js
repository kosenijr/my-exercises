/*
Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
________________________________________________________________
*/
// abbrev. logs to console
const log = console.log;
log('ready to go!')

/*
// create a function to match source to collection
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    // console.log(collection, source);

    // for of loop
    for (const parts of collection) {
        // create arrays out of the parts and source objects, add flat method, then check.
        // subarrays to reg arrays
        let pEntries = Object.entries(parts).flat();
        let sEntries = Object.entries(source).flat();
        // stringify
        let pStrings = JSON.stringify(pEntries);
        let sStrings = JSON.stringify(sEntries);

        // logs
        // log(pEntries, sEntries);
        // log(pEntries, ...sEntries, pEntries.includes(...sEntries));
        // log(pStrings, sStrings, pStrings.indexOf(sStrings));

        // set up ternary condition. then check.
        // first check if entries are arrays
        // log(Array.isArray(pEntries), Array.isArray(sEntries)); // both true

        // now conditions.
        // write the function for every Method.
        const areAllIncluded = (elem) => pEntries.includes(elem);
        // log(pEntries, sEntries, sEntries.every(areAllIncluded)) // correct sequence

        sEntries.every(areAllIncluded) ? arr.push(parts) : null;

    }
*/
// ____________________________________________________________________
// Concise the code

// create a function to match source to collection
function whatIsInAName(collection, source) {
    const arr = [];
    for (const parts of collection) {
        let pEntries = Object.entries(parts).flat();
        let sEntries = Object.entries(source).flat();
        sEntries.every((elem) => pEntries.includes(elem)) ? arr.push(parts) : null;
    }
    // ____________________________________________________________________


    // check arr
    log(arr);
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 });
// should return []