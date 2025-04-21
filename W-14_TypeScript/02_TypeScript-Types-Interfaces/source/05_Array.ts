function maximum(num: number[]) {
  let max = -10000000000;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}
const numArray = [15, 34, 22, 46, 777, 56, 67, 38, 99];
const result = maximum(numArray);
console.log(" The highest number is : ", result);

// ============================= //
// Example of array operator

// Way One of writing this code of Array of addresses
interface Address {
  city: string;
  Colony: string;
}
interface User {
  name: string;
  age: number;
  locations: Address[]; // This is for the multiple adresses
}

// Way Two of writing this code of Array of addresses
interface User {
  name: string;
  age: number;
  postals: {
    city: string;
    Colony: string;
  }[]; // This is for the multiple adresses
}

// ================================== //
// Question : function taking user array and return legal ones

interface Schema {
  firstName: string;
  LastName: string;
  age: number;
}
const user1: Schema = {
  firstName: "Hello",
  LastName: "World",
  age: 20,
};
const user2: Schema = {
  firstName: "Waqar",
  LastName: "Hassan",
  age: 24,
};
const user3: Schema = {
  firstName: "New",
  LastName: "User",
  age: 16,
};
const arrayOfUsers = [user1, user2, user3];
function checkLegal(users: Schema[]): Schema[] {
  return users.filter((u) => u.age > 18);
}
const legalUsers = checkLegal(arrayOfUsers);
console.log(legalUsers);

// ================================== //
// =========== IMP Questoin ========= //
// Why the one is giving the error while the two is not

interface point2D {
  x: number;
  y: number;
}
const one: point2D = { x: 1, y: 2, name: "hello", lastname: "world" };
const randomObject = { x: 1, y: 2, name: "hello", lastname: "world" };
const two: point2D = randomObject;

// one gives an error because TypeScript strictly checks excess properties in direct assignments.
// Since point2D only expects x and y, the extra properties (name lastname) cause an error.

// two works because randomObject is first declared without a strict type.
// TypeScript uses structural typing, allowing randomObject to be assigned to point2D as
// long as it has at least x and y. Extra properties are ignored in this case.
