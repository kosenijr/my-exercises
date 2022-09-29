/*
NOTES
- 
*/

/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return a number.

sumPrimes(10) should return 17.

sumPrimes(977) should return 73156.
________________________________________________________________
*/

// abbrev logs to console and set up an empty array
let [log, arr] = [console.log, []];
// log(arr);

function sumPrimes(num) {
    // for loop navigation and push into empty array
    for (let b = 2; b <= num; b++) {
        arr.push(b)
        // ternary condition: % 2's or % 3's for primes
        // arr = arr.map(elem => (elem > 3 && elem % 2 === 0) || (elem > 3 && elem % 3 === 0) ? null : elem);

        // map  method for prime nature
        arr = arr.map(elem => (elem > 3) && (elem % 2 !== 0 && elem % 3 !== 0) && !Number.isInteger(Math.sqrt(elem)) ? log(elem) : null);

    }
    // reduce method for summation, restore in num
    num = arr.reduce((prev, curr) => prev + curr);



    // check arr
    log(arr, num);

    // declare num

    // return num
    return num;
}

sumPrimes(10) // should return 17.
sumPrimes(30)
// sumPrimes(977) // should return 73156.
