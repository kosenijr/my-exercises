/*
Write a Counter with Redux

Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding state immutability, but first, here's a review of everything you've learned so far.

In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!

Tests
Passed:The action creator incAction should return an action object with type equal to the value of INCREMENT
Passed:The action creator decAction should return an action object with type equal to the value of DECREMENT
Passed:The Redux store should initialize with a state of 0.
Passed:Dispatching incAction on the Redux store should increment the state by 1.
Passed:Dispatching decAction on the Redux store should decrement the state by 1.
Passed:counterReducer should be a function
_________________________________________
*/

// establishing constants with capitalization
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types
// abbrev for logs to console
const log = console.log;

// reducer should me a function with two (or more) params and a switch statment
// modify state according to type of action.
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives
// incAction function should house action object and return
const incAction = () => {
    const action = {
        type: INCREMENT
    }
    return action

}; // Define an action creator for incrementing
// decAction function should house action object and return
const decAction = () => {
    const action = {
        type: DECREMENT
    }
    return action

}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
log(store.dispatch(incAction()), store.getState()); // +1
log(store.dispatch(decAction()), store.getState()); // -1
log('testing');