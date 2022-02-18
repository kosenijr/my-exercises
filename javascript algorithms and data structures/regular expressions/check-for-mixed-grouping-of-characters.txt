/*
Check For Mixed Grouping of Characters

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

Your regex myRegex should return true for the string Franklin D. Roosevelt

Your regex myRegex should return true for the string Eleanor Roosevelt

Your regex myRegex should return false for the string Franklin Roosevelt

Your regex myRegex should return false for the string Frank Roosevelt

You should use .test() to test the regex.

Your result should return true.
________________________________________________________________________
*/


let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) .*Roosevelt/g; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);

/*
NOTES
Hint 1
Use a|b to check for either a or b.

Hint 2
Your regex should use mixed grouping like /P(engu|umpk)in/g.

Hint 3
Use .* to allow for middle names. (see line 2).
*/