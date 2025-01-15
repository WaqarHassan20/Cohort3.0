const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.headers.token;
  console.log(token);
  const decoded = jwt.verify(token, process.env.BappaStunning);

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
      Error: error,
    });
  }
}

module.exports = {
  userMiddleware: userMiddleware,
};
