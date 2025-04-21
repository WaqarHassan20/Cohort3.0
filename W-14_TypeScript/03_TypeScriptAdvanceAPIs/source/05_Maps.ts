type UserObj = {
  Fname: string;
  age: number;
  email: string;
};

const users = new Map<String, UserObj>();

users.set("one", { Fname: "FirstBName1", email: "One@gmail.com", age: 22 });
users.set("two", { Fname: "FirstBName2", email: "One@gmai2.com", age: 23 });
users.set("three", { Fname: "FirstBName3", email: "One@gmai3.com", age: 24 });

console.log(users.get("one"));
console.table(users.values());
users.forEach((value, key) => {
  console.log(key, value.email, value.Fname, value.age);
});

// Maps are used more than Records as they give a clean code and structure
// So the Maps are mostly used everywhere
