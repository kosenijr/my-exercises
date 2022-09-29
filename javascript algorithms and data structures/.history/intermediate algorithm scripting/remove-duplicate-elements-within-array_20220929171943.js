// create an array with duplicative values, declare and abbrev log, then chack.
const [oldArr, newArr, log] = [[2, 3, 4, 5, 6, 3, 2, 8, 20], [], console.log];
// log(arr); // logs [2, 3, 4,  5, 6,3, 2, 8, 20]

// ternary condition to sift through oldArr elements
oldArr.filter(elem => !newArr.includes(elem) ? newArr.push(elem) : null);
)

