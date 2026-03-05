# Day 16 - React: useEffect, Lifecycle and Data Fetching

## Goal
Run side effects like fetching data and subscribing to events inside React components.

## Topics to Learn
- What counts as a side effect in React?
- useEffect syntax: useEffect(() => { }, [dependencies])
- Dependency array behaviours:
  - Empty array [] means run once when the component mounts
  - Array with values [value] means run whenever those values change
  - No array means run after every single render
- Cleanup function: return () => { cleanup code here }
- Fetching data on mount by defining an async function inside useEffect
- Managing loading, error, and success states with useState
- useRef for persisting values between renders and for accessing DOM elements

## Practice Task
Build PostList.jsx:
- Fetch a list of posts from https://jsonplaceholder.typicode.com/posts when the component mounts
- Show a Loading... message while the request is pending
- Show an error message if the request fails
- Display post titles and bodies in cards
- Add a search input that filters posts by title in real time

## Pro Tip
Do not make the useEffect callback itself async. Instead, define an async function inside useEffect and immediately call it.

## Checklist
- [ ] Fetch data successfully on component mount
- [ ] Show distinct loading and error states in the UI
- [ ] Use a cleanup function to prevent state updates after unmount
