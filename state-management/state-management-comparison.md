# State Management Comparison

## `useState` vs `useReducer`
- Use `useState` for simple, isolated local values.
- Use `useReducer` when state has multiple related fields or complex transitions.
- `useState` is shorter; `useReducer` is more structured.

## Context API / `useContext` vs Redux
- Context API is good for shared low-frequency state like theme, language, or auth status.
- Redux is better for large apps with complex global state and predictable update patterns.
- Context reduces prop drilling; Redux adds tooling, actions, reducers, and centralized flow.

## `useState` vs Context API
- `useState` stores local component state.
- Context API shares values across many components.
- Often they are used together, with `useState` inside a provider.

## When to Choose What
- Small local UI state: `useState`
- Complex component logic: `useReducer`
- Shared app-wide simple state: Context API + `useContext`
- Large scalable global state: Redux
