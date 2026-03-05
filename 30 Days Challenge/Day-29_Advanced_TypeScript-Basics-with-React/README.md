# Day 29 - TypeScript Basics with React

## Goal
Add static type safety to your React applications to catch bugs at compile time instead of runtime.

## Topics to Learn
- What TypeScript is and the benefits it provides over plain JavaScript
- Primitive types: string, number, boolean, null, undefined, and never
- Typed arrays: string[] and Array<string>
- Defining object shapes with interface and type
- The difference between interface and type aliases
- Union types for values that can be one of several types: string | number
- Optional properties in interfaces: name?: string
- Typing function parameters and return values
- Generics for flexible reusable types: Array<T> and Promise<T>
- Typing React component props by defining a props interface
- Typing useState with a generic: useState<string>('')
- Typing DOM event handlers: React.ChangeEvent<HTMLInputElement>
- Typing useRef: useRef<HTMLDivElement>(null)

## Setup
Create a new TypeScript React project with:
npm create vite@latest day29 -- --template react-ts

## Practice Task
Rebuild your ProfileCard component entirely in TypeScript:
- Define a Profile interface that describes all the component props
- Type every useState hook with an explicit generic type argument
- Add correct types to every event handler function
- Continue fixing TypeScript errors until the project compiles with zero errors

## Pro Tip
Never use the any type as a quick fix. It completely disables type checking for that value and defeats the purpose of TypeScript. If you are unsure of a type, use unknown and narrow it down before using it.

## Checklist
- [ ] New Vite React TypeScript project is running
- [ ] Interfaces are defined for at least 3 component prop types
- [ ] All useState hooks have explicit generic type arguments
- [ ] All event handler functions have correct TypeScript types
- [ ] The project compiles with zero TypeScript errors
