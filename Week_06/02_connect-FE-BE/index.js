const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "AsimMunirMeriJindMeriJaan";
app.use(express.json());

let users = [];

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.username;
  if (username) {
    req.username = username;
    next();
  } else {
    res.json({
      message: "You are not Signed in",
    });
  }
}

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

app.post("/signup", logger, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (users.find((u) => u.userName == username)) {
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

app.post("/signin", logger, (req, res) => {
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

app.use(auth);

app.get("/me", logger, (req, res) => {
  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == req.username) {
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
