/*
Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....

truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.

truncateString("A-", 1) should return the string A....

truncateString("Absolutely Longer", 2) should return the string Ab....
_____________________________________
*/

function truncateString(str, num) {
    // confirm str and num
    // console.log(str, num);
    // create a back counter
    // slice str

    // ternary condition: if num is less than the actual length of the str, then provide the properly sliced str, with initial and ending index, or the str itself
    str = (num < str.length ? `${str.slice(0, num)}...` : str);
    console.log(str);

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
