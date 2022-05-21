/*

______________________________________________________________
*/
console.log('let\'s start!');
// House constructor with general param
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
// Only change code below this line

//   create a new instance of House: myHouse
let myHouse = new House(5);
// check log and instanceof myHouse
console.log(myHouse);
let question = myHouse instanceof House;
console.log(question);
