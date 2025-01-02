// It is a mini hospital type project to learn how backend works
// How requests are handled by the Postman and operated these requests
// This file gives the basic idea for backend functionality
const express = require("express");
const app = express();

let users = [
  {
    username: "John Wick",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

// Getting the healthy kidneys count
app.get("/", (req, res) => {
  const johnKindneys = users[0].kidneys;
  const numberOfKidneys = johnKindneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKindneys.length; i++) {
    if (johnKindneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json([
    { numberOfKidneys, numberOfHealthyKidneys, numberOfUnHealthyKidneys },
  ]);
});

// Code for adding a kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Post, Adding Done!",
  });
});

// Replacing the unhealthy kidney with healthy one
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Put , replacing Done!",
  });
});

// Deleting the kidneys either healthy or not

function checkBeforeDelete() {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  }
  return atLeastOneUnhealthyKidney;
}

app.delete("/", (req, res) => {
  if (checkBeforeDelete()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Deletion done with check",
    });
  } else {
    res.status(411).json({
      msg: "You have no bad kidneys",
    });
  }
});

app.listen(3000);
