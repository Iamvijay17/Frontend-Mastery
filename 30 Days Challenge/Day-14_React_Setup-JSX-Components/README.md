# Day 14 - React: Setup, JSX and Components

## Goal
Set up your first React project and understand how to build UIs from reusable components.

## Topics to Learn
- What is React and what problem does it solve?
- The Virtual DOM concept
- Setting up a project with Vite: npm create vite@latest my-app -- --template react
- Project structure: src folder, main.jsx, App.jsx
- JSX rules: single root element, className instead of class, camelCase attributes
- Embedding JavaScript expressions in JSX with curly braces {}
- Creating functional components
- Exporting and importing components between files
- Using fragments to avoid unnecessary wrapper divs
- Passing data into components using props

## Practice Task
Build a ProfileCard component that accepts name, role, bio, and avatarUrl as props.
Render 3 ProfileCard components with different data inside App.jsx.

## Setup Commands
npm create vite@latest day14-react -- --template react
cd day14-react
npm install
npm run dev

## Pro Tip
One component per file is the standard convention. Use PascalCase for file names like ProfileCard.jsx. Keep each component focused on one responsibility.

## Checklist
- [ ] Vite React project running on localhost:5173
- [ ] Build and render 3 or more components
- [ ] Pass different props to each component instance
- [ ] Use React fragments instead of extra wrapper divs
