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