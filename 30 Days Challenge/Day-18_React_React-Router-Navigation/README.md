# Day 18 - React Router: Navigation and Routing

## Goal
Build a multi-page React application using client-side routing.

## Topics to Learn
- Installing react-router-dom: npm install react-router-dom
- Setting up BrowserRouter, Routes, and Route components
- Using Link and NavLink for navigation (NavLink adds an active class automatically)
- useNavigate hook for programmatic navigation after actions
- useParams hook to read dynamic segments from the URL like /product/:id
- useSearchParams for reading query strings like ?search=react
- Nested routes using Outlet for shared layouts
- Catch-all 404 route using path="*"
- Implementing a protected route that redirects unauthenticated users

## Practice Task
Build a 4-page app with these routes:
- / for the Home page
- /about for the About page
- /products for a Products list page
- /products/:id for a Single Product detail page
- A Navbar with NavLink components on every page
- A 404 page displayed for any unknown route

## Pro Tip
Always use the Link component from react-router-dom instead of a plain anchor tag. Using a href causes a full page reload which destroys all React state.

## Checklist
- [ ] Set up 4 or more routes including at least one dynamic route
- [ ] Use useParams to read the ID from the URL
- [ ] Style the active NavLink differently from inactive links
- [ ] Handle unknown routes with a 404 wildcard route
