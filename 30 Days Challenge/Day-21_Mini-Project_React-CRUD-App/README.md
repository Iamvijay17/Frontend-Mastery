# Day 21 - MINI PROJECT: React CRUD App

## Goal
Build a complete React application that supports Create, Read, Update, and Delete operations.

## What to Build
A Contact Manager or a Notes App.

## Required Features
- Display a list of all items loaded from state or a mock API
- A form to create and add new items to the list
- An edit mode to update an existing item (inline or in a modal)
- A delete button with a confirmation prompt before removing an item
- A real-time search or filter input that narrows down the displayed list
- An empty state message shown when the list has no items

## Technical Requirements
- Use useReducer or multiple useState hooks for all state management
- Use React Router for at least 2 navigable pages
- All form inputs must be controlled inputs
- Implement a conditional rendering pattern for the edit mode
- Persist data to localStorage so it survives page refreshes

## Stretch Goals
- Pagination to show a fixed number of items per page
- Sorting the list alphabetically or by date
- Animate list item additions and removals with CSS transitions

## Pro Tip
This project exercises every concept from Days 14 through 20. If a particular feature feels difficult, go back and review the README for that specific day before continuing.

## Checklist
- [ ] All four CRUD operations are working correctly
- [ ] Data persists in localStorage across page refreshes
- [ ] Search or filter narrows the list in real time
- [ ] Edit mode allows updating an existing item
- [ ] Layout is fully responsive on mobile and desktop
