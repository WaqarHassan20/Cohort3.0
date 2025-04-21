// Hit the control C to cancel the running port address
// And then run the new localhost to run your updated code
const express = require("express");
const app = express();

function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
}

app.get("/", (req, res) => {
  const input = req.query.n;
  const total = sum(input);
  res.send("Hello , the sum is : " + total);
});

app.listen(3000);

// The issue with your code is that the input value from the query parameter (req.query.a) is a string, but the sum function expects a number. When you pass a string to the sum function, the loop condition (i <= a) fails because the comparison between a number (i) and a string (a) doesn’t work as expected. As a result, the loop never runs, and the total remains 0.

// 200 : Everything wents fine
// 404 : Doctor is not in the hospital
// 500 : Mid surgery light went away
// 411 : Inputs were incorrect, wrong person came to suegery
// 403 : you are not allowed to access this hospital

// REQUEST METHODS
// DELETE : going to get a kidney removed
// POST : going to get a new kidney inserted
// GET : going for a consultation to get a check up
// PUT : going to get a kidney replaced
