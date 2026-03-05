# Day 20 - React: Custom Hooks and useReducer

## Goal
Extract reusable stateful logic into custom hooks and manage complex state with useReducer.

## Topics to Learn
- The Rules of Hooks: only call hooks at the top level and only inside React functions
- Creating a custom hook by extracting logic into a function that starts with use
- Building a useFetch(url) hook that returns data, loading, and error
- Building a useLocalStorage(key, default) hook
- Building a useDebounce(value, delay) hook for delaying input processing
- useReducer: const [state, dispatch] = useReducer(reducer, initialState)
- Writing a pure reducer function: (state, action) => newState
- Dispatching action objects with a type and optional payload
- Deciding when to use useReducer versus useState
- Combining useReducer with useContext for a lightweight global store

## Practice Task
Build and use the following custom hooks:
1. useFetch(url) that returns an object with data, loading, and error fields
2. useToggle(initialValue) that returns the current value and a toggle function
3. A shopping cart built with useReducer supporting add, remove, update quantity, and clear actions

## Pro Tip
A custom hook is just a regular JavaScript function that happens to call other hooks. If you find yourself copy-pasting the same useState and useEffect logic into multiple components, that is a sign to extract a custom hook.

## Checklist
- [ ] Build a useFetch hook and use it inside 2 different components
- [ ] Build a useReducer cart that handles 4 distinct action types
- [ ] Write a useDebounce hook and use it on a search input
