/*

*/
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// then statement
makeServerRequest.then(result => console.log(result));

/*
NOTES
- Then Method is executed immediately after promise is fulfilled by resolve.
- result comes from the argument given to the Resolve Method.
*/