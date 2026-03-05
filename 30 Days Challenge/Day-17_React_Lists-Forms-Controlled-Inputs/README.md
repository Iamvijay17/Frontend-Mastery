# Day 17 - React: Lists, Keys and Controlled Forms

## Goal
Render dynamic lists of data efficiently and manage all form state inside React.

## Topics to Learn
- Rendering arrays using .map() inside JSX
- The key prop and why React requires it for list items
- Using unique IDs as keys instead of array indexes
- Conditional rendering with ternary operators, && short-circuit, and if/else outside JSX
- Controlled inputs: linking input value to state and handling onChange
- Managing multiple form fields with a single state object
- Preventing default form submission with e.preventDefault()
- Clearing the form by resetting state after a successful submit
- Handling select, checkbox, and radio as controlled inputs

## Practice Task
Build a BookTracker app:
- A form to add a book with title, author, genre, and a read/unread checkbox
- Display all books as a rendered list
- A dropdown to filter the book list by genre
- Ability to toggle a book between read and unread status
- A delete button to remove a book from the list

## Pro Tip
Only use array index as the key if your list items are completely static and will never be reordered or deleted. In all other cases, use a proper unique ID.

## Checklist
- [ ] Render a list from state with a unique key on every item
- [ ] Build a fully controlled form with 4 or more input fields
- [ ] Filter the displayed list based on a dropdown selection
