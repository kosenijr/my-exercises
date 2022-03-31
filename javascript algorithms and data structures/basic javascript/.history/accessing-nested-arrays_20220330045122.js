/*

*/

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

/*

*/

Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

Passed
secondTree should equal the string pine.

Passed
Your code should use dot and bracket notation to access myPlants.



var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = "";

// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object:
// grab pine
secondTree = myPlants[1].list[1];