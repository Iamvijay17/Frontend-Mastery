# Day 19 - React: Context API and useContext

## Goal
Share global state across deeply nested components without prop drilling.

## Topics to Learn
- Understanding the prop drilling problem and why it becomes painful
- Creating a context with createContext()
- Wrapping components in a Context Provider and providing a value
- Reading context in any child component with the useContext hook
- Best practice: defining context in a separate dedicated file
- Allowing child components to update context by providing a setter function
- Using multiple contexts in a single application
- Knowing when to use Context versus regular props versus Redux
- Understanding that all context consumers re-render when the context value changes

## Practice Task
Implement two context systems in one app:
1. ThemeContext that provides a dark/light mode toggle affecting the entire application
2. AuthContext that tracks a fake login/logout state and shows different UI based on it
- The Navbar should display the logged-in username
- A protected dashboard page should redirect to login if the user is not authenticated

## Pro Tip
Context works best for truly global state like theme, language preference, and authentication. For complex data fetching or large-scale state management, reach for Redux Toolkit instead.

## Checklist
- [ ] Create a context and consume it in 3 or more components
- [ ] Toggle the theme globally from a child component deep in the tree
- [ ] Build a basic auth context with working login and logout functionality
