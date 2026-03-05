# Day 22 - Redux: Core Concepts - Store, Actions and Reducers

## Goal
Deeply understand the core Redux data flow before introducing any library shortcuts.

## Topics to Learn
- What is Redux and when does it make sense to use it?
- Comparing Redux to Context API and local useState
- The three principles of Redux: single source of truth, state is read-only, pure reducer functions
- The Store: the single container that holds the entire application state
- Actions: plain JavaScript objects that must have a type property
- Action creators: simple functions that return action objects
- Reducers: pure functions that take current state and an action and return new state
- dispatch(action) to send an action to the store
- getState() to read the current state snapshot
- subscribe() to run a callback whenever the state changes
- The complete Redux data flow: UI dispatches action, reducer produces new state, UI re-renders

## Practice Task
Implement a counter using only the vanilla redux package with no React:
Install with: npm install redux
- Create a store using createStore
- Write action creators for increment, decrement, and reset
- Write a reducer with a switch statement for each action type
- Dispatch all three actions and log the resulting state after each one
- Use subscribe to automatically log state on every change

## Pro Tip
Spending time with vanilla Redux before learning Redux Toolkit makes everything click. RTK is simply Redux with the boilerplate removed.

## Checklist
- [ ] Create a Redux store manually with createStore
- [ ] Write 3 or more action creator functions
- [ ] Write a reducer function with a switch statement
- [ ] Dispatch actions and observe the state changes
