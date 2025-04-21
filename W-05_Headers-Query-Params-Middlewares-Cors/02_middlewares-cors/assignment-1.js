const express = require("express");
const app = express();

let countRequests = 0;

function timeStamp(req, res, next) {
  countRequests += 1;
  const currentTime = new Date().toUTCString();
  console.log("\n");
  console.log("Requests : " + countRequests);
  console.log("Time     :", currentTime);
  console.log("Host     :", req.hostname);
  console.log("URL      :", req.url);
  console.log("Method   :", req.method);
  next();
}

app.use(timeStamp);

app.get("/sum/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const sum = a + b;
  console.log("Answer   : " + sum);
  res.json({ Sum: sum });
});

app.get("/subtract/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const subtract = a - b;
  console.log("Answer   : " + subtract);
  res.json({ Subtraction: subtract });
});

app.get("/product/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const product = a * b;
  console.log("Answer   : " + product);
  res.json({ Product: product });
});

app.get("/divide/:firstArg/:secondArg", (req, res) => {
  const a = parseFloat(req.params.firstArg);
  const b = parseFloat(req.params.secondArg);
  const divide = a / b;
  console.log("Answer   : " + divide);
  res.json({ Division: divide });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
