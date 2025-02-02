// =============== Intersection & ====================== //
//  Intersection : want both this AND this too
// =============== Intersection & ====================== //

interface Employee {
  name: string;
  status: string;
}

type Boss = {
  name: string;
  department: string;
};

type Intersection = Employee & Boss;

const I: Intersection = {
  name: "Kirat Singh",
  status: "Married",
  department: "CSE",
};

console.table(I);
// =============== Union | ======================== //
//  Intersection : optional either 1 or 2 or 3 ....
// =============== Union | ======================== //

type Union = Employee | Boss;

// we can pass all the properties or one or two or three or none of them
const U: Union = {
  name: "Harkirat",
  department: "civil",
  status: "Unmarried",
};

function print(user: Union) {
  console.log("Hello", user.name); // Is Allowed
  //   console.log("Hello", user.status); // Is not Allowed
  //   console.log("Hello", user.department); // Is not Allowed
}
