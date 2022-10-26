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
    // reinforce the proper and sequential min and max values.
    [min, max] = arr.sort((a, b) => a - b); // works correctly

    // place for loop here to ensure proper max.
    for (let k = 2; k <= max; k++) {
        // push k into arrPrior then check
        arrPrior.push(k);
        // log(arrPrior);
        
        // composite: no remainder and elem does not equal 1 or itself, push into composite array

        arrPrior.forEach((elem) => k % elem === 0 && elem !== 1 && elem !== k ? arrPriorComp.push(k) : null);

        arrPrior = arrPrior.filter((elem) => !arrPriorComp.includes(elem) ? elem : null);

    }

    for (let b = min; b <= max; b++) {

        newarr.push(b);

        // arrPrior.forEach((elem) => Number.isInteger(b / elem) ? arrTimes.push(elem) : null);

        // num = arrTimes.reduce((prev, curr) => prev * curr);
        // log(num);

        // log(2*2*3*3*5*7*11*19*23)

        // log(num);

        // return num

    }

    log(newarr, arrPrior); // logs the numerator and denominator arrays, respectively
}

smallestCommons([1, 5]) // should return 60.

smallestCommons([5, 1]) // should return 60.

// [2, 2, 3, 5]

smallestCommons([2, 10]) // should return 2520.

// [2, 2, 2, 3, 3, 5, 7]

smallestCommons([1, 13]) // should return 360360.

// [2, 2, 2, 3, 3, 5, 7, 11, 13]

smallestCommons([23, 18]); // should return 6056820.

  // [2, 2, 3, 3, 5, 7, 11, 19, 23]