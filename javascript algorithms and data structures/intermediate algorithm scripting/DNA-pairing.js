/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
________________________________________________________________
*/
// abbrev logs to console
const log = console.log;
log('ready to go!');

// create function for DNA elements, that takes a string
function pairElement(str) {
    // create a new array. then check the possibilities
    // let [arr, [a, b], [c, d]] = [[...str], ['A', 'T'], ['C', 'G']];
    let [arr, strand, a, b, c, d] = [[...str], [], 'A', 'T', 'C', 'G'];
    // log(arr, `\n`, [a, b], [c, d], `\n `, [b, a], [d, c], `\n  `, strand);

    // establish four pairs of strand AT and CG, and their alternates, within an array
    strand.push([a, b], [b, a], [c, d], [d, c]);
    log(strand);



    log(str);
}
pairElement("GCG");