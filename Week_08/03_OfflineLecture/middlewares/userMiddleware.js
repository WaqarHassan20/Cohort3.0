const { User } = require("../db");

async function userAuth(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const user = await User.findOne({
    username: username,
    password: password,
  });

  if (user) {
    next();
  } else {
    res.json({
      message: "User not found",
    });
  }
}

module.exports = {
  userAuth,
};
