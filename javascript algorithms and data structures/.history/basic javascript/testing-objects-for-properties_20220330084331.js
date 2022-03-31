/*
Testing Objects for Properties
  
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

Passed
checkObj({city: "Seattle"}, "city") should return the string Seattle.

Passed
checkObj({city: "Seattle"}, "district") should return the string Not Found.

Passed
checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
________________________________________
*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}