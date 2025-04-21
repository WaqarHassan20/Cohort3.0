const express = require("express");
const app = express();
app.use(express.json());

let users = [];

function generateToken() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
}

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
    const token = generateToken();
    foundUser.token = token;
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
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
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
