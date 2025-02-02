interface User {
  name: string;
  age: number;
  address: {
    // to make it optional we use the question mark after name
    city?: string;
    country?: string;
    pincode: number;
  };
}

let user: User = {
  name: "Waqar",
  age: 24,
  address: {
    city: "Hafizabad",
    country: "Pakistan",
    pincode: 52110,
  },
};

let userOptionl: User = {
  name: "Waqar",
  age: 24,
  address: {
    pincode: 52110,
  },
};

function isLegal(data: User): boolean {
  if (data.age > 18) return true;
  else return false;
}

const ans = isLegal(user);
console.log(ans);

// ========================================= //
// interfaces can also use other interfaces //

interface Address {
  city: string;
  country: string;
  houseNumber: number;
  pincode: number;
}

interface UserData {
  name: string;
  age: number;
  address: Address;
}
interface Office {
  address: Address;
}

// extending concept of interfaces as classes and ojects
interface People {
  name: string;
  age: number;
  Greet: () => string;
}

const person1: People = {
  name: "Waqar",
  age: 24,
  Greet: () => {
    return `Hello, ${person1.name}! How are you ?`;
  },
};

console.log(person1); // Output : whole object of perosn1
console.log(person1.Greet); // Output : Only function body from perosn1
console.log(person1.Greet()); // Output : Give the greeting message of string format
