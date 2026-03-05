# Day 10 - JavaScript: DOM Manipulation and Events

## Goal
Use JavaScript to dynamically read, change, and respond to user actions on a webpage.

## Topics to Learn
- document.querySelector and querySelectorAll
- getElementById and getElementsByClassName
- Reading: textContent, innerHTML, value, getAttribute
- Writing: textContent, innerHTML, setAttribute, style property
- Creating elements: createElement, appendChild, prepend, remove
- classList methods: add, remove, toggle, contains
- addEventListener for attaching event handlers
- Common events: click, input, change, keydown, submit, mouseover
- Event object properties: e.target, e.key, e.preventDefault()
- Event delegation pattern

## Practice Task
Build todo-app.html and todo.js:
- An input field and Add button
- Dynamically add tasks to a list using createElement
- Click a task to mark it as done using classList.toggle
- A delete button on each task that removes it from the DOM

## Pro Tip
Use textContent not innerHTML when inserting user-provided text. innerHTML with user input creates XSS security vulnerabilities.

## Checklist
- [ ] Add and remove DOM elements dynamically
- [ ] Use classList.toggle to manage UI state
- [ ] Implement event delegation on the task list
