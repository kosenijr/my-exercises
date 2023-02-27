// abbrev logs to console
const [arr, log,] = [[], console.log];
// converter function
function convertToRoman(num) {
    // set two ranges: \u2160 - \u2169, \u216A (\u0041 - A) - \u216F (\u0046 - F)
    // for-loop navigation: first range
    for (let a = 2160; a <= 2169; a++) {
        // log(a);
        // log(String.fromCharCode(parseInt(a, 16)))
        arr.push({
            'code': a,
            'value': String.fromCharCode(parseInt(a, 16)),
            'number': parseInt((a + '').charAt(3)) + 1
        });
    }
    log(arr);


    // for-loop navigation: second range
    for (let b = 0; b <= 6; b++) {

        // log(a, b);
    }

    return num;
}

convertToRoman(36);