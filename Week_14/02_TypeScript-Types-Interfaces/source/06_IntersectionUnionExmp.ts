// =========================== //
// ====== Intersection ======= //
interface A {
  x: number;
  y: number;
}

interface B {
  z: string;
}

type C = A & B;

const cee: C = {
  x: 4,
  y: 5,
  z: "hello",
};
// In intersection we do need atleast every properties from both of the sides and hence we obtain a union actually in intersection

// =========================== //
// ====== Union ======= //

interface A {
  x: number;
  y: number;
}

interface B {
  z: string;
}

type Unen = A | B;

const cee1: Unen = {
  x: 4,
  y: 5,
}; // Valid (matches A)

const cee2: Unen = {
  z: "hello",
}; // Valid (matches B)

const cee3: Unen = {
  x: 4,
  y: 5,
  z: "hello",
}; // Valid (matches both A and B)
// So, in union we do have to write the values that must exist in either A set or B set or both of them,
// All values of only A will also be fine
// All values of only B will also be fine
// All values of both A and B will also be fine

// Typescript has open types not sealed types , as long as the declared value is there , no matter how many other values are there within, it will be fine :
// like the above code of union example