// Basic introduction of generics in typescript and some basic examples //
// T tells that what type of data will be write here it will assign the params as well as return type according to that written datatype //

// ================================== //
// ==== New example of Generics ====//
// ================================== //

function identity<T>(value: T): T {
  return value;
}
// Here String is telling that the value will be string and the return type will also be string //
let result = identity<string>("Hello");

// ================================== //
// ==== New example of Generics ====//
// ================================== //

interface Box<T> {
  value: T;
}
const stringBox: Box<string> = { value: "Hi" };
const numberBox: Box<number> = { value: 123 };

// ================================== //
// ==== New example of Generics ====//
// ================================== //

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const merged = merge({ name: "Ali" }, { age: 25 });
console.log(merge);

// ================================== //
// ==== New example of Generics ====//
// ================================== //

type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>; // "yes"
type Test2 = IsString<number>; // "no"
