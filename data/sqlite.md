# SQLite

## Definition
SQLite is a lightweight relational database stored directly on the device.
It is useful when an app needs structured tables, queries, and relationships for offline data.

## Advantages
- Works well for structured records and relational data.
- Supports SQL queries, filters, sorting, and joins.
- Good choice for larger offline datasets.

## Disadvantages
- More setup than simple key-value storage.
- Schema design and migrations must be managed carefully.
- Not as flexible as object-style databases for nested data.

## Example Code

```javascript
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("students.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    roll TEXT NOT NULL
  );
`);

db.runSync("INSERT INTO students (name, roll) VALUES (?, ?)", ["Anushrut", "42"]);

const rows = db.getAllSync("SELECT * FROM students");
console.log(rows);
```
