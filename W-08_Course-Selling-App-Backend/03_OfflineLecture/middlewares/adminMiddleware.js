const { Admin } = require("../db");

async function adminAuth(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const admin = await Admin.findOne({
    username: username,
    password: password,
  });

  if (admin) {
    next();
  } else {
    res.json({
      message: "Admin not found",
    });
  }
}

module.exports = {
  adminAuth,
};
