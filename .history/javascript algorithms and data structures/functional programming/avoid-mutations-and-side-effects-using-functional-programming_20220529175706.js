/*
Avoid Mutations and Side Effects Using Functional Programming

If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

Your function incrementer should not change the value of fixedValue (which is 4).

Your incrementer function should return a value that is one larger than the fixedValue value.

Your incrementer function should return a value based on the global fixedValue variable value.
________________________________________________________________
*/
// log gen
console.log('ready to go!')
// The global variable
let fixedValue = 4;

function incrementer() {
    // Only change code below this line
    return fixedValue + 1;

    // Only change code above this line
}
// checking function call
console.log(incrementer());


/*
NOTES
returning fixedValue += 1 would be incorrect in this situation because the ask was for 
*/


