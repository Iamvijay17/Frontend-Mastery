# Day 15 - React: Props, State and useState

## Goal
Understand props for passing data and useState for making components interactive.

## Topics to Learn
- Props are read-only data passed from parent to child
- Destructuring props for cleaner component code
- The children prop for composing components
- What is state and why does React re-render on state changes?
- useState hook: const [value, setValue] = useState(initialValue)
- Using state with strings, numbers, booleans, arrays, and objects
- Updating arrays in state without mutation using spread: [...list, newItem]
- Updating objects in state without mutation: { ...obj, key: newValue }
- Lifting state up to a common parent component

## Practice Task
Build the following components:
1. Counter.jsx with increment, decrement, and reset buttons
2. Toggle.jsx that shows and hides a password input field
3. TagInput.jsx where you type a tag, press Enter to add it as a pill, and click a pill to remove it

## Pro Tip
Never mutate state directly. React will not detect the change. Always use the setter function with a new value.

## Checklist
- [ ] Use useState with at least 3 different data types
- [ ] Update an array in state correctly without mutation
- [ ] Lift state from a child up to the parent component
