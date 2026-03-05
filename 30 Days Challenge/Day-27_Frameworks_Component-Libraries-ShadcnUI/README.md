# Day 27 - Component Libraries: shadcn/ui and Radix UI

## Goal
Accelerate UI development using professional, accessible component libraries.

## Topics to Learn
- What component libraries are and why teams use them
- The main options: shadcn/ui, Material UI, Chakra UI, and Ant Design
- What makes shadcn/ui unique: the components are copied into your project so you own and can modify all the code
- Installing and initializing shadcn/ui in a Vite and Tailwind project
- Using core components: Button, Card, Input, Dialog, Select, Tabs, Badge, and Toast
- The Radix UI primitives that power shadcn components
- Customizing shadcn components to match your design system
- Building complex UIs by composing simple primitives together
- Built-in accessibility features: ARIA attributes, focus management, and keyboard navigation

## Practice Task
Build a simple admin dashboard interface using shadcn/ui:
- A sidebar with navigation links
- Stat cards on the main content area showing summary numbers
- A data table listing items with sortable columns
- A Dialog modal for creating a new item
- Toast notifications that appear after create and delete actions

## Installation Commands
npx shadcn@latest init
npx shadcn@latest add button card input dialog table badge toast

## Pro Tip
Because shadcn copies the component source code into your project, you can open any component file and modify it directly. You never have to fight against the library or override its styles.

## Checklist
- [ ] shadcn/ui is installed and configured with your theme
- [ ] At least 5 different shadcn components are used in the project
- [ ] A Dialog modal opens and closes correctly
- [ ] A Toast notification appears after a user action
