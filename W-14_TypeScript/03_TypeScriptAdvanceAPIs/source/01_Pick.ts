// ===================================== //
// ============ New Question =========== //

interface User {
  name: string;
  age: number;
}

const boy1: User = {
  name: "Waqar",
  age: 24,
};

const boy2: User = {
  name: "Unknown",
  age: 34,
};

function AgeSum(u1: User, u2: User) {
  console.log("The sum of their ages is : ", u1.age + u2.age);
}

AgeSum(boy1, boy2);

// ===================================== //
// ============ New Question =========== //

interface UserData {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

// sample code for above interface
type NewUpdatedProps = Pick<UserData, "id" | "email" | "password">;
function updatedPropsFunction(argumentProps: NewUpdatedProps) {}

// Useful code for above interface
type userProfile = Pick<UserData, "id" | "email" | "password">;
function UpdateFunctionForUser(argumentProps: userProfile) {}
