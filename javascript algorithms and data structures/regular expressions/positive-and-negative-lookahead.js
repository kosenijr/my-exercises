/*
Positive and Negative Lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

Your regex should use two positive lookaheads.

Your regex should not match the string astronaut

Your regex should not match the string banan1

Your regex should match the string bana12

Your regex should match the string abc123

Your regex should not match the string 12345

Your regex should match the string 8pass99

Your regex should not match the string 1a2bcde

Your regex should match the string astr1on11aut
___________________________________________________________________
*/

// MY SOLUTION
let sampleWord = "astronaut";
let pwRegex = /(?=[a-u1-9]{6,})(?=\D*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);

/*
A MORE CONCISE SOLUTION
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
*/


/*
NOTES
- reiteration:
Hint 1
Remember to use 2 lookaheads to check the patterns in the string. The first lookahead is very similar to that given in the example - ‘(?=\w{3,6})’ - only the lower-number 3 is too low for our test cases, and an upper-number is completely unneccesarry. This first lookahead is only used to find a string consisting of a certain amount of characters. A second lookahead must be used to check for consecutive numerical values at the end of the string.

Hint 2
The second lookahead is also similar to that given in the example - (?=\D*\d) - however, this expression too must be modified to pass all test cases. Remember to specify the exact amount of numbers you want to appear at the end of the string.
 */