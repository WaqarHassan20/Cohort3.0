const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, process.env.JWT_USER_SECRET);
  try {
    if (decodedData) {
      req.userId == decodedData.id;
      next();
    } else {
      res.status(403).send({
        message: "You are unathorized on this website",
      });
    }
  } catch (error) {
    res.json({
      Error: error,
    });
  }
}

module.exports = {
  auth,
};
