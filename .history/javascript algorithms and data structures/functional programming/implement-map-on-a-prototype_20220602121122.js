/*
Implement map on a Prototype

As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

new_s should equal [46, 130, 196, 10].

Your code should not use the map method.
________________________________________________________________
*/
// abbrev log, check
const log = console.log;
log('ready to go!');

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    // use original array 
    s.forEach(item => newArray.push(item * 2));
    log(newArray, s);
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    log(item * 2)
    return item * 2;
});

log(new_s);

/*
NOTES
if callback is the equivalent of 
function (item) { 
    log(item * 2)
    return item * 2;
}

Array.prototype.myMap = function (function (item) { 
    log(item * 2)
    return item * 2;
})

    const newArray = [];
    // Only change code below this line
    
    this.forEach(log(callback));
    log();
    newArray.push();
    log(newArray);
    // Only change code above this line
    return newArray;
};


*/