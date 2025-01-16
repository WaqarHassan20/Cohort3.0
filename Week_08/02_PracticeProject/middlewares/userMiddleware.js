const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../imports");

function userMiddleware(req, res, next) {
  const token = req.headers.token;
  // console.log(token);
  const decoded = jwt.verify(token, JWT_USER_SECRET);

  try {
    if (decoded) {
      req.userId == decoded.id;
      next();
    } else {
      res.status(403).send({
        message: "You are an authorized USER",
      });
    }
  } catch (error) {
    res.status(403).send({
      message: "Invalid token",
      Error: error.message,
    });
  }
}

module.exports = {
  userMiddleware,
};
