// // The given whole code has very ugly appraoch for rewriting the datatype in object declaration and then passing it to function
// function Greet(user: { name: string; age: number }) {
//   console.log(`Hello, ${user.name}! How are your doing?`);
//   console.log(`Your age is ${user.age}`);
// }
// const userObject: { name: string; age: number } = {
//   name: "waqar ul hassan",
//   age: 24,
// };
// Greet(userObject);
var value1 = 10;
var value2 = "Hello";
function sum(val1, val2) {
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2; // ✅ Number addition
    }
    else {
        return val1.toString() + val2.toString(); // ✅ String concatenation
    }
}
console.log(sum(value1, value2)); // output : "10Hello"
