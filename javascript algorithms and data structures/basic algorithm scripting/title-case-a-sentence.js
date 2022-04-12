/*
Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return the string Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
______________________________
*/


// function titleCase(str) {

//     // split str (w/ space within parenthetical, single quotes) into several array elements
//     str = str.split(' ');

//     // confirm str status: s
//     // console.dir(str);

//     // create a new array
//     let newArr = [];

//     // for of loop to grab each element
//     for (let substr of str) {

//         // console.log(
//         //     substr,
//         //     typeof (str),
//         //     typeof (substr),
//         //     substr.slice(1)

//         // );

//         // change the first character of each substring: s
//         let firstLetter = substr[0].toUpperCase();
//         // check
//         // console.log(firstLetter, typeof (str));

//         // change or maintain the lower case of the rest of the substring
//         let remainingLetters = substr.slice(1).toLowerCase();
//         // console.log(remainingLetters);

//         // concatenate the strings via variables
//         str = firstLetter + remainingLetters;
//         // console.log(str);

//         // push str into array
//         newArr.push(str);

//         // check array
//         // console.log(newArr);

//         // bring elements together with join property, check newArr: s
//         // console.log(newArr.join(' '));

//         // restore array with join property within str
//         str = newArr.join(' ');

//         // check str for string nature
//         // console.log(str, typeof (str));
//         //


//     };

//     return str;
// }

// titleCase("I'm a little tea pot");

// OR
// ____________________________________________________________________________
// function titleCase(str) {

//     // split str (w/ space within parenthetical, single quotes) into several array elements
//     str = str.split(' ');

//     // confirm str status: s
//     // console.dir(str);

//     // create a new array
//     let newArr = [];

//     // for of loop to grab each element
//     for (let substr of str) {
//         console.log(
//             // substr,
//             // substr[0].toUpperCase() + substr.slice(1).toLowerCase()
//         );
//         // store the above concatenation within str
//         str = substr[0].toUpperCase() + substr.slice(1).toLowerCase();
//         // push into new array
//         newArr.push(str);
//         // use join property
//         str = newArr.join(' ');
//         // check str
//         console.log(str);
//     }

//     return str;
// }

// titleCase("I'm a little tea pot");

// OR
// ____________________________________________________________________________
function titleCase(str) {
    str = str.split(' ');
    let newArr = [];
    for (let substr of str) {
        str = substr[0].toUpperCase() + substr.slice(1).toLowerCase();
        newArr.push(str);
        str = newArr.join(' ');
    }
    return str;
}
titleCase("I'm a little tea pot");
