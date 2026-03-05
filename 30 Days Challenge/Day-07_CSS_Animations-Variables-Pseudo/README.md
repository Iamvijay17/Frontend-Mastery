# Day 07 - CSS Animations, Variables and Pseudo-Classes

## Goal
Write maintainable CSS with variables and bring your UI to life with smooth animations.

## Topics to Learn
- CSS custom properties with --variable-name and var()
- :root for defining global variables
- Pseudo-classes: :hover, :focus, :active, :nth-child(), :first-child, :last-child
- Pseudo-elements: ::before and ::after
- transition: property duration easing-function
- transform: scale, rotate, translate, skew
- @keyframes and the animation shorthand
- animation-delay, iteration-count, fill-mode

## Practice Task
Build animations.html:
- Theme the whole page using CSS variables for colors and spacing
- A button with a hover transition and scale transform
- An animated loading spinner using @keyframes
- A card component with a ::before decorative accent element

## Pro Tip
Only animate transform and opacity. These properties use the GPU and never trigger layout reflow, making them buttery smooth.

## Checklist
- [ ] Define at least 5 CSS variables in :root
- [ ] Build an animated spinner with @keyframes
- [ ] Use ::before or ::after for a decorative UI effect
