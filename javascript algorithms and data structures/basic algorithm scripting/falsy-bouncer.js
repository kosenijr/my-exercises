/*
Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

bouncer([false, null, 0, NaN, undefined, ""]) should return [].

bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
____________________________________________
*/

// create variable for console.log function
let cl = console.log;
// create a function,bouncer, that takes in an arr and returns a modified array
function bouncer(arr) {
    // cl(typeof (NaN)) // logs a number
    // create a falsy array
    const falsy = [false, null, 0, "", undefined, NaN];
    // testing NaN equalities
    // cl(
    //     typeof (NaN) === 'number' && isNaN(NaN) === true,
    //     typeof (null) === 'number' && isNaN(null) === true,
    //     typeof (1) === 'number' && isNaN(1) === true,
    //     typeof (undefined) === 'number' && isNaN(undefined) === true,
    //     typeof ('a') === 'number' && isNaN('a') === true,
    //     typeof (false) === 'number' && isNaN(false) === true,
    //     )

    //  loop within this particular array
    for (const falsies of falsy) {
        // console.log(arr, falsies);
        // first, filter the element type that are numbers and are not numbers, then negate the entire argument
        arr = arr.filter(elem => !(typeof (elem) === 'number' && isNaN(elem) === true));
        // second, filter the element the elements that do not strictly equate to falsies
        arr = arr.filter(elem => elem !== falsies)
    }

    // cl(isNaN(NaN));
    cl(arr);
    return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);
