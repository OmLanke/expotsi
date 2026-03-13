# Network and Storage Comparison

## `fetch` vs Axios
- `fetch` is built in and needs no extra dependency.
- Axios provides interceptors, automatic JSON handling, and cleaner request configuration.
- Choose `fetch` for simple requests; choose Axios for reusable API layers.

## AsyncStorage vs SQLite vs Realm
- AsyncStorage stores small key-value pairs like theme, token, or preferences.
- SQLite stores structured relational data using SQL tables.
- Realm stores object-based local data with a more database-like mobile API.

## Quick Selection Guide
- Preferences or tokens: AsyncStorage
- Offline tabular records and queries: SQLite
- Rich object models with local persistence: Realm
