// ============================= //
// = Deep dive into interfaces = //
// ============================= //

// ============================= //
// also runs without interface
// ============================= //

class WithoutInterface {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}
const ManagerWithoutInterface = new WithoutInterface(
  "Without Interface",
  30,
  50000
);
console.table(ManagerWithoutInterface);

// ============================= //
// also runs with the interface
// ============================= //

// Using the Person interface ensures type safety, code consistency, and reusability
interface Person {
  name: string;
  age: number;
  greet(): string;
  isLegal(): boolean;
}

class Manager implements Person {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  greet(): string {
    return "Hello! New Manager";
  }
  isLegal(): boolean {
    return this.age > 18 ? true : false;
  }
}
const Mg = new Manager("With Interface", 50, 200000);
console.table(Mg);
console.log(Mg.greet());

// =============================== //
//  Concise verison of above code
// =============================== //

class ConciseVersion implements Person {
  constructor(public name: string, public age: number, public salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  greet(): string {
    return "Hello! Concised Code";
  }
  isLegal(): boolean {
    return this.age > 18 ? true : false;
  }
}
const Concise = new Manager("Concised Version", 10, 1000);
console.table(Concise);
console.log(Concise.greet());
console.log(Concise.isLegal());
