/*

*/
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

/*
NOTES
- important to include an 'i' with the 'g' flag because of the case sensitivity.
- the 'i' and 'g' flags can be written interchangeably: e.g., /Twinkle/ig or 
/Twinkle/gi
*/