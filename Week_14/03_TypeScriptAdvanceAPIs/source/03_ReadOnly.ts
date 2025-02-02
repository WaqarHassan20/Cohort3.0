// Primitives (string, number, boolean, etc.): Stored directly in memory, immutable with const (cannot be reassigned).
// Non-Primitives (objects, arrays, functions): Stored as references, const locks the reference but allows modifications to properties or elements.// ============= //

const object = {
  age: 45,
  name: "hello",
};
object.name = "World";

// ============= //
const arr = [2, 4, 5, 7];
arr[3] = 3; // will not give error
// arr = [3, 4, 5, 6]; // this will throw and error surely
// And same case is true for the object

// ============= //
const value = "hello";
// value = "world"; // so this is throwing an error due to the above explanation
// You are changing the value of the object and array but not chaning the reference the array and object. Because Primitives are Stored directly in memory

// ================================ //
// ================================ //

// So to avoid the above problem, we uses the keyword readonly in the typescript
// to make it immuteable and lock the values as well as references

type ReadOnlyType = {
  readonly name: string; // will change the value as it is not locked
  readonly password: string; // will change the value as it is not locked
};
const user: ReadOnlyType = {
  name: "HelloWorld",
  password: "MyPassowrd",
};
// user.name = "AgainHelloWorld"; // this will not complain if the readonly will not be written there
