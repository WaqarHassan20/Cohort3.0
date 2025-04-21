const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "AsimMunirMeriJindMeriJaan";
app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.userName == username)) {
    // compares the each userName of array with the new coming username to avoid duplicacy
    // username is incoming vlaue, while the userName are the already stored values
    res.json({ message: "You are already signed In" });
  }

  users.push({
    userName: username,
    userPassword: password,
  });

  res.json({
    message: "You are signed up",
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == username && users[i].userPassword == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
  } else {
    res.status(403).send({ Token: "Invalid username or password" });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  // the above line returns json code having username = { username : "WaqarHassan"}
  const username = decodedInformation.username;
  // it is because when we are decoding it, we give it json coded data

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == username) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.userName,
      password: foundUser.userPassword,
    });
  } else {
    res.json({ message: "Sorry Invalid Token!" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Important note about the jwt :
// People think that anyone can decode the jwt token , so it has the vulnerbility
// but the token generated cannot be decoded without the jwtSecret key
// which is always known by the user only. so it is totally secured.
// Example of the signed check of the bank to transfer money.
