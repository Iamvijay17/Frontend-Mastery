# Day 08 - JavaScript Basics: Variables, Data Types and Operators

## Goal
Understand JavaScript fundamentals - how to store data and perform operations.

## Topics to Learn
- What is JavaScript and where does it run?
- var vs let vs const (always prefer const and let)
- Data types: String, Number, Boolean, null, undefined
- typeof operator
- String methods: length, toUpperCase, slice, includes, replace, split, trim
- Number methods: toFixed, parseInt, parseFloat, Math.round, Math.random
- Arithmetic operators: +, -, *, /, %, **
- Comparison operators: ===, !==, >, <, >=, <=
- Logical operators: &&, ||, !
- Ternary operator: condition ? valueIfTrue : valueIfFalse
- Template literals using backtick strings

## Practice Task
Create basics.js:
- Declare variables for your name, age, and city
- Calculate your age in days and in hours
- Use a ternary to check if a number is even or odd
- Build a greeting sentence using template literals

## Pro Tip
Always use === instead of ==. Double equals does type coercion and causes subtle bugs. 0 == false is true - a nightmare.

## Checklist
- [ ] Use const and let throughout (never var)
- [ ] Practice at least 5 different string methods
- [ ] Use template literals instead of string concatenation
