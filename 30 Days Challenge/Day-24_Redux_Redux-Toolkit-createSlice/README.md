# Day 24 - Redux Toolkit: createSlice and configureStore

## Goal
Write production-quality Redux with significantly less boilerplate using Redux Toolkit.

## Topics to Learn
- What is Redux Toolkit and why the Redux team created it
- configureStore() as the modern replacement for createStore
- createSlice(): defining name, initialState, and reducers in one place
- How createSlice automatically generates action creators from reducer functions
- Immer integration inside RTK: safely write code that appears to mutate state
- Structuring an app with multiple feature slices
- Using extraReducers to respond to actions defined in other slices
- Installing the Redux DevTools browser extension to inspect state changes

## Practice Task
Rebuild your app from scratch using Redux Toolkit:
Install with: npm install @reduxjs/toolkit react-redux
Create two feature slices:
1. cartSlice.js with actions for addItem, removeItem, updateQuantity, and clearCart
2. userSlice.js with actions for login, logout, and setProfile

## Recommended File Structure
src/store/store.js
src/store/cartSlice.js
src/store/userSlice.js

## Pro Tip
With RTK and Immer you can write state.items.push(newItem) directly inside a reducer. Immer intercepts this and produces a proper immutable update behind the scenes. No more manual spread operators in reducers.

## Checklist
- [ ] Create at least 2 feature slices using createSlice
- [ ] Configure the store using configureStore with your slices
- [ ] Open Redux DevTools and inspect each state change
- [ ] Use the auto-generated action creators in your React components
