// ==========function 1===============
function sum(a, b) {
  return a + b;
}

let result = sum(3, 5);
console.log("The sum of two numbers is = ", result);

let result2 = sum(10, "Hello");
console.log("The sum of two strings is = ", result2);

// ==========function 2==============//

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let totalSum = sum(10);
console.log("The sum of numbers up to the given number is =  ", totalSum);
