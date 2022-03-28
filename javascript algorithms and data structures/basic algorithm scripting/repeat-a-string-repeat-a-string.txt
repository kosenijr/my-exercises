/*
Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

repeatStringNumTimes("*", 3) should return the string ***.

repeatStringNumTimes("abc", 3) should return the string abcabcabc.

repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.

repeatStringNumTimes("abc", 1) should return the string abc.

repeatStringNumTimes("*", 8) should return the string ********.

repeatStringNumTimes("abc", -2) should return an empty string ("").

The built-in repeat() method should not be used.

repeatStringNumTimes("abc", 0) should return "".
___________________________________________
*/


function repeatStringNumTimes(str, num) {
    // check str and num
    console.log(str, num);
    // new array
    let newArr = [];

    // set num in for loop as a counter
    for (let k = 0; k < num; k++) {
        console.log(k, 'abc');
        newArr.push(str);

    }

    // re-store within str
    str = newArr.join('');
    console.log(str);


    return str;
}

//   repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 3);
