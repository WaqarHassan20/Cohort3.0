abstract class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract Greetings(): string;
  demo() {
    console.log("Hello new user");
  }
}

class Person extends User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name;
    this.age = age;
  }

  Greetings() {
    return "Hello! i New User here";
  }
}

const obj = new Person("NewUser", 24);
console.table(obj);
console.table(obj.Greetings());
