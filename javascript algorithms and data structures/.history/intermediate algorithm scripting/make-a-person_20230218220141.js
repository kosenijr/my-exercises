/*
Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

No properties should be added. Object.keys(bob).length should always return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return the string Bob.

bob.getLastName() should return the string Ross.

bob.getFullName() should return the string Bob Ross.

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").

bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/

// set up the variables
const log = console.log;
// Person constructor
const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    // set a reusable variable
    const fullName = firstAndLast;

    this.getFullName = function () {
        return fullName
    };

    this.getLastName = () => {
        return 
    }
    this.getFirstName = () => {
        return
    };

    this.setFullName = () => {
        return
    };

    this.setFirstName = (first) => {
        return
    };


    this.setLastName = (last) => {
        return
    };
};

const bob = new Person('Bob Ross');
// Part 2
bob.setFirstName("Haskell");
bob.getFullName();
log(bob.getFullName());
// should return the string Haskell Ross after bob.setFirstName("Haskell").

bob.setLastName("Curry");
bob.getFullName();
log(bob.getFullName());
// should return the string Haskell Curry after bob.setLastName("Curry").

bob.setFullName("Haskell Curry");
bob.getFullName();
log(bob.getFullName());
// should return the string Haskell Curry after bob.setFullName("Haskell Curry").
bob.getFirstName();
log(bob.getFirstName());
// should return the string Haskell after bob.setFullName("Haskell Curry").
bob.getLastName();
log(bob.getLastName());
// should return the string Curry after bob.setFullName("Haskell Curry").

// Part 1
/*
bob.getFullName();
bob.setFullName();
Object.keys(bob).length;
log(Object.keys(bob).length);
// should always return 6.
bob instanceof Person;
log(bob instanceof Person);
// should return true.

bob.firstName;
log(bob.firstName);
// should return undefined.
bob.lastName;
log(bob.lastName);
// should return undefined.

bob.getFirstName();
log(bob.getFirstName());
// should return the string Bob.
bob.getLastName();
log(bob.getLastName());
// should return the string Ross.
bob.getFullName();
log(bob.getFullName());
// should return the string Bob Ross.
*/

