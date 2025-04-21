function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function OpeartionDo(a, b, operation) {
  let result = operation(a, b);
  return result;
}

let output = OpeartionDo(10, 5, subtract);
console.log(output);
