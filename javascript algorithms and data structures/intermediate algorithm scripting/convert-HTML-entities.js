/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

convertHTML("Schindler's List") should return the string Schindler&apos;s List.

convertHTML("<>") should return the string &lt;&gt;.

convertHTML("abc") should return the string abc.
________________________________________________________________
*/
/*
// abbrev logs to console. then check.
const log = console.log;
// log('let\'s code!');
// create function to convert HTML after taking in a string param.
function convertHTML(str) {
    // log(str);
    // create subarrays of special characters and their corresponding HTML entities
    // let arr = [['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;'], ['"', '&quot;'], ['\'', '&apos;']];
    let arr = [['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;'], ['"', '&quot;'], ['\'', '&apos;']];
    // check each element
    // arr.forEach(elem => log(elem[0], `\n`, elem[1]));
    // set up regex through map method
    arr.map(elem => str.includes(elem[0]) ? str = str.replaceAll(`${elem[0]}`, elem[1]) : null)
    // arr.map(elem => str.includes(elem[0]) ? str = str.replace(/&/g, 'n') : null)
    // check str
    log(str);
    return str;
}
*/
// _____________________________________________________________
// Concise
const log = console.log;
function convertHTML(str) {
    let arr = [['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;'], ['"', '&quot;'], ['\'', '&apos;']];
    arr.map(elem => str.includes(elem[0]) ? str = str.replaceAll(`${elem[0]}`, elem[1]) : null)
    return str;
}

// _____________________________________________________________
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("<>");
convertHTML("abc");