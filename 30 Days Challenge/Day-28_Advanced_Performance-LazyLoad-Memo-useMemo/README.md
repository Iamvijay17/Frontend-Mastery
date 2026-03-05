# Day 28 - Advanced React: Performance Optimization

## Goal
Build fast React applications by preventing unnecessary work and loading code only when it is needed.

## Topics to Learn
- Understanding what causes a React component to re-render
- React.memo: wrapping a component to skip re-rendering if its props have not changed
- useCallback: memoizing a function reference so it does not change on every render
- useMemo: memoizing the result of an expensive calculation
- Recognizing when memoization helps and when it adds unnecessary overhead
- Code splitting with React.lazy() and dynamic import()
- Suspense component for showing fallback UI while a lazy component loads
- Using the React DevTools Profiler to record and analyze rendering performance
- Virtualizing long lists with react-window to only render visible items

## Practice Task
Work through these optimization exercises:
1. Create a list component that renders 10000 items and observe the sluggishness
2. Wrap the individual list item component in React.memo and measure the improvement
3. Identify an expensive calculation in a component and wrap it with useMemo
4. Lazy load one of your route-level page components with React.lazy
5. Implement react-window to virtualize the 10000 item list

## Pro Tip
Never optimize speculatively. Use the React DevTools Profiler to measure actual performance first. Only apply memo and useMemo where you can confirm a measurable improvement. Over-memoization adds complexity and can hurt performance.

## Checklist
- [ ] Use React.memo on a component and verify it renders fewer times
- [ ] Wrap an expensive calculation with useMemo
- [ ] Lazy load at least one route-level component
- [ ] Profile the app before and after with React DevTools Profiler
