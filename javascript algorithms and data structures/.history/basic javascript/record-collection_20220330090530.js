Record Collection
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.

Passed
After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA

Passed
After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.

Passed
After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set

Passed
After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.

Passed
After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.

Passed
After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set

Passed
After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
____________________________________________________________________________________________________________
/*

*/

// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  /* 
  - to be safe: use brackets as much as possible, instead of dot notation. See code below.
  - also, be sure to use return statements in each area, after changes within if/else 
    statements.
  */


  if (prop !== 'tracks' && value !== '') {
    // create a new key within applicable subarrays: prop (i.e. artist).
    // set artist to the value parameter.
    /* n add a new property (prop) by using it at the end of object like this portion of 
    the 'if' statement: */
    records[id][prop] = value;
    // return the entire object
    return records
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [];
    records[id][prop].push(value);
    return records
  } else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
    return records
  } else if (value === '' && records[id].hasOwnProperty(prop)) {
    delete records[id][prop];
    return records
  } else if (value === '') {
    delete records[id][prop];
    return records
  } else {
    return records;
  }

}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


Note: line 77 can also be written as:
} else if (prop === 'tracks' && !records[id].hasOwnProperty('tracks')) {
  /* Emphasis on the exclamation point as a negater */