# Day 23 - Redux: Connecting React with useSelector and useDispatch

## Goal
Wire a Redux store into a React application so components can read and update global state.

## Topics to Learn
- Installing the libraries: npm install redux react-redux
- Wrapping the root of your app with the Provider component and passing it the store
- useSelector hook for reading any piece of state from the store
- useDispatch hook for getting the dispatch function inside a component
- Standard folder structure: store.js, actions.js, and reducer.js
- Combining multiple reducers with combineReducers
- Writing dedicated selector functions to keep component code clean
- How useSelector optimizes re-renders by comparing previous and next selected values

## Practice Task
Convert your Day-21 CRUD app to use Redux:
- Move all application state out of components and into the Redux store
- Use useSelector to read the items list in the display components
- Use useDispatch with your existing action creators to add, edit, and delete items

## Recommended File Structure
src/store/store.js
src/store/actions.js
src/store/reducer.js
src/components/ItemList.jsx
src/components/ItemForm.jsx

## Pro Tip
Define selector functions alongside your reducers and import them into components. For example: export const selectAllItems = state => state.items. This keeps component files clean and makes refactoring easier.

## Checklist
- [ ] App is wrapped in the Redux Provider at the root level
- [ ] At least 2 components read state using useSelector
- [ ] Actions are dispatched using useDispatch in response to user interactions
- [ ] combineReducers is used to combine 2 or more separate reducer functions
