/*

*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

// catch statement
makeServerRequest.catch(error => console.log(error));


/*
NOTES
Catch
- is the method used when your promise has been rejected;
- is executed immediately after a promise's reject method is called.
*/