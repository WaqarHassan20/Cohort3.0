// This was the assignment task
const express = require("express");
const app = express();

app.use((req, res, next) => {
  const userId = req.headers.userId;
  if (numberOfRequests[userId]) {
    numberOfRequests[userId] += 1;
    if (numberOfRequests[userId] > 5) {
      res.status(404).send("No more entry");
    }
  } else {
    next();
  }
});

let numberOfRequests = {};
setTimeout(() => {
  numberOfRequests = {};
}, 1000);

app.get("/user", (req, res) => {
  res.status(200).json({
    username: "john player",
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
