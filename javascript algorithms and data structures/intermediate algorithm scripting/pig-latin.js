/*
Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
________________________________________________________________
*/
/*
// abbrev logs to console, then check.
const log = console.log;
log('ready to go!');


function translatePigLatin(str) {
    // create vowels array
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // turn string into an array. check.
    let arr = [...str];
    // log(arr);

    // there are three conditions: no match, initial-vowel match, and non-initial vowel match.

    // _________________________________________

    // initial vowel match
    vowels.map(elem => arr[0] === elem ? arr.push(...'way') : null);

    // _________________________________________

    // non-initial vowel match
    // vowels.map(elem => log(arr, elem, arr.splice(0, arr.findIndex(elem => vowels.includes(elem)))));
    // exp: fixing consonants to the end
    vowels.map(elem => arr.push(...arr.splice(0, arr.findIndex(elem => vowels.includes(elem)))));
    // work on adding ['a','y'] to arr

    // _________________________________________
    // no vowel match

    arr.filter(elem => arr.every(elem => !vowels.includes(elem)) ? arr.push(...'ay') : null);

    // _________________________________________

    // initial character is a vowel, but the ending has no 'y
    vowels.map(elem => arr[0] === elem && arr.at(-1) !== 'y' ? arr.push(...'ay') : null);

    // check array
    // log(arr);

    // convert arr back to string and restore. then check.
    str = arr.join('');
    log(str);
    // return str
    return str;

*/
// _________________________________________________________________________________________________
// concise the code
/*
const log = console.log;
log('ready to go!');
function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = [...str];
    vowels.map(elem => arr[0] === elem ? arr.push(...'way') : null);
    vowels.map(elem => arr.push(...arr.splice(0, arr.findIndex(elem => vowels.includes(elem)))));
    arr.filter(elem => arr.every(elem => !vowels.includes(elem)) ? arr.push(...'ay') : null);
    vowels.map(elem => arr[0] === elem && arr.at(-1) !== 'y' ? arr.push(...'ay') : null);
    str = arr.join('');
    log(str);
    return str;
*/
// ______________________________________________________________________________________________
// concise the code some more
const log = console.log;
function translatePigLatin(str) {
    let [vowels, arr] = [['a', 'e', 'i', 'o', 'u'], [...str]];
    vowels.map(elem => arr[0] === elem ? arr.push(...'way') : null);
    vowels.map(elem => arr.push(...arr.splice(0, arr.findIndex(elem => vowels.includes(elem)))));
    arr.filter(elem => arr.every(elem => !vowels.includes(elem)) ? arr.push(...'ay') : vowels.map(elem => arr[0] === elem && arr.at(-1) !== 'y' ? arr.push(...'ay') : null));
    str = arr.join('');
    log(str);
    return str;

}
// 
translatePigLatin("consonant"); // should return onsonantcay.
translatePigLatin("california") // should return the string aliforniacay.
translatePigLatin("paragraphs") // should return the string aragraphspay.
translatePigLatin("glove") // should return the string oveglay.
translatePigLatin("algorithm") // should return the string algorithmway.
translatePigLatin("eight") // should return the string eightway.
translatePigLatin("schwartz") // should return the string artzschway.
translatePigLatin("rhythm") // should return the string rhythmay.

// exp
translatePigLatin('eighty');
translatePigLatin('thruway');
translatePigLatin('threeway');

/*
NOTES
- just learned today to start declaring my variables on one line.
--It makes life so much easier, efficient, and effective.
*/