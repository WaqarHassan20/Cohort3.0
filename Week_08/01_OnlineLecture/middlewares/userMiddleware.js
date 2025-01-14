const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../imports");

function userMiddleWare(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_USER_SECRET);

  if (decodedData) {
    req.userId == decodedData.id;
    next();
  } else {
    res.status(403).send({
      message: "You are not signed In on this website",
    });
  }
}

module.exports = {
  userMiddleWare: userMiddleWare,
};
