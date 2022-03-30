/*

*/


let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);


// exercise
let difficultSpelling = "Mississippi";
let myRegex = /m+/ig; // try 'i+', 'p+', and 's+'
let result = difficultSpelling.match(myRegex);

console.log(difficultSpelling.match(myRegex));



