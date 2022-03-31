/*

____________________________________________
*/
  var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
However, if your object has any non - string properties, JavaScript will automatically typecast them as strings.

Make an object that represents a dog called myDog which contains the properties name(a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.



var myDog = {
  // Only change code below this line
  name: 'Hannibal',
  legs: 4,
  tails: 1,
  friends: ['Chuck Norris', 'Mr.T', 'Rocky']

  // Only change code above this line
};