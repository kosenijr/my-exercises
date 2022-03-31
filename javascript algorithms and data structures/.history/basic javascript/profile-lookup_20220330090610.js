/*

*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  /*_________________________________________________________________________ */
  // freecodecamp solution

  // // create for-loop for constant iteration: k
  // for (let p = 0; p < contacts.length; p++) {
  //   console.log(p);
  //   // conditionals for check key/value pairs
  //   if (contacts[p].firstName === name) {
  //     return contacts[p][prop] || 'No such property'

  //   }
  // }
  // return 'No such contact'

  /*_________________________________________________________________________ */
  // erica n's solution

  // let firstName = false;
  // let property = false;
  // for (let i = 0; i < contacts.length; i++) {
  //   if (contacts[i].firstName === name) {
  //     firstName = true;
  //     if (contacts[i].hasOwnProperty(prop)) {
  //       property = true;
  //       return contacts[i][prop];
  //     }
  //   }
  // }
  // if (!firstName) {
  //   return "No such contact";
  // } else {
  //   return "No such property";
  // }

  /*_________________________________________________________________________ */
  // my solution

  // create a for-loop
  for (let k = 0; k < contacts.length; k++) {
    // conditionals
    if (contacts[k].firstName === name && contacts[k].hasOwnProperty(prop)) {
      return contacts[k][prop]
    } else if (contacts[k].firstName === name && !contacts[k].hasOwnProperty(prop)) {
      return 'No such property'
    }
  }
  return 'No such contact'

  /*_________________________________________________________________________ */


  // Only change code above this line
}

lookUpProfile("Akira", "likes");