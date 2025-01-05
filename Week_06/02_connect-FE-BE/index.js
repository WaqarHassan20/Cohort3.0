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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
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
        username: foundUser.username,
      },
      JWT_SECRET // Every one has this value different, so it is secured as without this, encoding cannot be done
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).send({ token: "Invalid username or password" });
  }
  console.log(users);
});

app.get("/me", auth, (req, res) => {
  // const userFound = users.find((user) => user.username === decodedData.username);
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
