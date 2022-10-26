/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 60568 20.
________________________________________________________________
*/


// create function for least common multiple
function smallestCommons(arr) {
    // declare log and destructure arr, then check.
    let [newarr, [min, max], arrTimes, arrPrior, arrNow, arrPriorComp, log] = [[], arr, [], [], [], [], console.log];
// 
    // function sumPrimes(num) {
    for (let k = 2; k <= max; k++) {

        arrPrior.push(k);

        // composite: no remainder and elem does not equal 1 or itself, push into composite array

        // }
    }

    // log(arrPrior);

    arrPrior.forEach(elem => (elem % elem === 0) && (elem !== 1 && elem !== elem) ? arrPriorComp.push(elem) : null);

    arrPrior = arrPrior.filter(elem => !arrPriorComp.includes(elem) ? elem : null);

    log(arrPrior);

    [min, max] = arr.sort((a, b) => a - b); // works correctly
    // log(arr, min, max)
    // for loop for navigation
    for (let b = min; b <= max; b++) {
        newarr.push(b);

        // sumPrimes(max);

        arrPrior.forEach(elem => Number.isInteger((b / elem)) ? arrTimes.push(elem) : null);

        // log(2*2*3*3*5*7*11*19*23)
        // log(num);
        // return num
    }
}
// smallestCommons([1, 5]) // should return 60.
// smallestCommons([5, 1]) // should return 60.
// [2, 2, 3, 5]
// smallestCommons([2, 10]) // should return 2520.
// [2, 2, 2, 3, 3, 5, 7]
// smallestCommons([1, 13]) // should return 360360.
// [2, 2, 2, 3, 3, 5, 7, 11, 13]
smallestCommons([23, 18]) // should return 6056820.
// [2, 2, 3, 3, 5, 7, 11, 19, 23]