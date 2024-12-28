// ==========function 1 ===============

function greet(userData) {
  console.log(
    "Namastee " +
      userData.userName +
      " G. You are " +
      userData.age +
      " years old."
  );
}

let user1 = {
  userName: "WAQAR",
  age: 24,
};

greet(user1);

// ==========function 2 ===============

function findVoter(voters) {
  let validVoter = [];
  for (let i = 0; i < voters.length; i++) {
    if (voters[i].age > 18 && voters[i].gender == "male") {
      validVoter.push(voters[i]);
    }
  }
  return validVoter;
}

const allVoters = [
  {
    userName: "Faizan",
    age: 22,
    gender: "male",
  },
  {
    userName: "Rimsha",
    age: 24,
    gender: "female",
  },
  { userName: "Haroon", age: 23, gender: "male" },
];

console.log(findVoter(allVoters));
