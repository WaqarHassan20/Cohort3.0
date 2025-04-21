const express = require("express");
const app = express();

app.get("/sum/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const sum = a + b;
  console.log(sum);
  res.json({ Sum: sum });
});

app.get("/subtract/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const subtract = a - b;
  console.log();
  res.json({ Subtraction: subtract });
});

app.get("/product/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const product = a * b;
  console.log(product);
  res.json({ Product: product });
});

app.get("/divide/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const divide = a / b;
  console.log(divide);
  res.json({ Division: divide });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// // Conver the string into object notation
// const a = "{}";
// console.log(typeof a);
// const x = JSON.parse(a);

// // Conver the object into string notation
// const b = {};
// console.log(typeof b);
// const y = JSON.stringify({});
