/*
Copy an Object with Object.assign
The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an object, too. A useful tool for handling objects is the Object.assign() utility. Object.assign() takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:

const newObject = Object.assign({}, obj1, obj2);
This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.

The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.

Tests
Passed:The Redux store should exist and initialize with a state that is equivalent to the defaultState object declared on line 1.
Passed:wakeUp and immutableReducer both should be functions.
Passed:Dispatching an action of type ONLINE should update the property status in state to online and should NOT mutate state.
Passed:Object.assign should be used to return new state.
___________________________________________
*/

const log = console.log;
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
    // use spread operator and curly braces for new object to ensure that state remains unchanged.
      let newState = {...Object.assign(state)};
      newState.status = 'online';
      log(state);
      log(newState);
      return newState;
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
// log(store.dispatch(wakeUp()));