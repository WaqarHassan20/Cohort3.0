// The given whole code has very ugly appraoch for rewriting the datatype in object declaration and then passing it to function
function Greet(user: { name: string; age: number }) {
  console.log(`Hello, ${user.name}! How are your doing?`);
  console.log(`Your age is ${user.age}`);
}
const userObject: { name: string; age: number } = {
  name: "waqar ul hassan",
  age: 24,
};
Greet(userObject);

// Either give her the datatype explicitly or it will get it by your self by compiler of typescript implicitly
let username: string = "Waqar";
let age: number = 25;

// ====================  //
// To declare the datatype for each object every time , instead declare a interface or sample and then use it evertime when creating a new object
// So, types means that create once and assign can assign it everytime whenever needed
// Define the structure of the object

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

// Declare an object
const user: User = {
  firstName: "WAQAR",
  lastName: " UL HASSAN",
  age: 24,
};
const newUser: User = {
  firstName: "New",
  lastName: "User",
  age: 26,
};

// Define a function that accepts the object
function Greeting(user: User) {
  console.log(`The first name is : ${user.firstName}!`);
  console.log(`The lsat name is : ${user.lastName}`);
  console.log(`Your age is ${user.age}`);
}
// Pass the object into the function
Greeting(user);
Greeting(newUser);

// ==================== //
// interface in typescript
interface Manager {
  name: string;
  rank: string;
}
interface Employee {
  name: string;
  rank: string;
}
// interface teamLead { Manager & Employee } // This will throw an error
// Correct way to use intersection type
interface TeamLead extends Manager, Employee {}

// ==================== //
// Type in typescript
type typeManager = {
  name: string;
  rank: string;
};
type typeEmployee = {
  name: string;
  rank: string;
};
type intersection = typeEmployee & typeManager;

// =========================== //
// This will throw an error for adding the two differnt value by default
// type S = string | number;
// let val1 = 10;
// let val2 = "Hello";
// function sum(val1: S, val2: S): S {
//   return val1 + val2;
// }
// console.log(sum(val1, val2));

// // =========================== //
type ST = string | number;
let value1: ST = 10;
let value2: ST = "Hello";
function sum(val1: ST, val2: ST): string | number {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return val1 + val2; // ✅ Number addition
  } else {
    return val1.toString() + val2.toString(); // ✅ String concatenation
  }
}
console.log(sum(value1, value2)); // Output: "10Hello"
