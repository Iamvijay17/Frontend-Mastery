# Day 11 - JavaScript: Async, Fetch and Promises

## Goal
Request live data from external APIs and handle asynchronous operations cleanly.

## Topics to Learn
- What is asynchronous code? The JavaScript event loop
- Callbacks and the problem of callback hell
- Promises: .then(), .catch(), .finally()
- Promise.all() for making parallel requests
- async and await syntax
- try, catch, and finally for async error handling
- fetch() API for making HTTP GET requests
- Working with response.json(), response.ok, and response.status
- Displaying loading spinners and error states in the UI

## Practice Task
Build fetch-app.html and fetch.js:
- Fetch a list of users from https://jsonplaceholder.typicode.com/users
- Show a loading spinner while the request is in progress
- Display user cards in the DOM when data arrives
- Show a user-friendly error message if the request fails

## Free APIs to Practice With
- https://jsonplaceholder.typicode.com
- https://pokeapi.co
- https://restcountries.com

## Pro Tip
Always handle errors with try/catch. APIs fail for many reasons including network issues, rate limits, and server errors.

## Checklist
- [ ] Fetch API data and display it in the DOM
- [ ] Show loading and error states to the user
- [ ] Use async/await syntax instead of .then chains
