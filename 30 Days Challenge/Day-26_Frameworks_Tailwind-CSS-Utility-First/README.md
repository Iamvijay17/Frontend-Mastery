# Day 26 - Tailwind CSS: Utility-First Styling

## Goal
Style React applications rapidly and consistently using Tailwind CSS utility classes.

## Topics to Learn
- What utility-first CSS means and why it scales better than traditional CSS
- Installing Tailwind CSS in a Vite project using the official documentation
- Core utility categories: spacing (p, m), sizing (w, h), typography (text, font), colors (bg, text), borders, and shadows
- Responsive design with breakpoint prefixes: sm: md: lg: xl: 2xl:
- Interactive state variants: hover: focus: active: disabled:
- Dark mode styling with the dark: prefix
- Using arbitrary values for one-off sizes: w-[340px] or bg-[#f5a623]
- Extracting repeated patterns with @apply inside a CSS file
- Extending the Tailwind theme in tailwind.config.js with custom colors and fonts
- Using clsx or the cn utility to apply classes conditionally

## Practice Task
Rebuild your Day-13 landing page from scratch using only Tailwind:
- Delete the custom CSS file entirely and use no custom styles whatsoever
- Implement the full responsive layout using Tailwind breakpoint prefixes
- Add a working dark mode toggle powered by the Tailwind dark: variant

## Installation
Follow the official guide at: https://tailwindcss.com/docs/installation/using-vite

## Pro Tip
Install the Tailwind CSS IntelliSense extension in VS Code. It gives you autocomplete and previews for every utility class as you type.

## Checklist
- [ ] Tailwind is installed and working in the Vite project
- [ ] The full layout is built using only Tailwind classes with no custom CSS
- [ ] The layout is fully responsive using Tailwind breakpoint prefixes
- [ ] Dark mode works correctly using the dark: variant
