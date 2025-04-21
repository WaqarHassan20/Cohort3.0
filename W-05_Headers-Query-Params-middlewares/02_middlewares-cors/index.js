const express = require("express");
const app = express();
let countRequests = 0;

function requestCounter(req, res, next) {
  countRequests += 1;
  console.log(`Total requests on the server are : ${countRequests}`);
  next();
}

app.use(requestCounter);

app.get("/sum/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const sum = a + b;
  res.json({ Sum: sum });
});

app.get("/subtract/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const subtract = a - b;
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
