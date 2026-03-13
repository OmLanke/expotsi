# Realm

## Definition
Realm is an object database for mobile apps that stores data as live objects instead of SQL tables.
It is useful for apps that need fast local persistence with object-oriented data access.

## Advantages
- Object-based API feels natural in JavaScript apps.
- Fast reads and writes for many mobile use cases.
- Supports reactive patterns with live-updating objects.

## Disadvantages
- Extra dependency and database-specific concepts.
- Less universal than SQL for teams already familiar with relational databases.
- Schema changes still require migration planning.

## Example Code

```javascript
import Realm from "realm";

class Student extends Realm.Object {
  static schema = {
    name: "Student",
    properties: {
      _id: "int",
      name: "string",
      roll: "string",
    },
    primaryKey: "_id",
  };
}

const realm = await Realm.open({ schema: [Student] });

realm.write(() => {
  realm.create("Student", { _id: 1, name: "Anushrut", roll: "42" });
});

const students = realm.objects("Student");
console.log(students[0].name);
```
