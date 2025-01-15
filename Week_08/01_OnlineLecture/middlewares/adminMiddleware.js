const jwt = require("jsonwebtoken");

function adminMiddleWare(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, process.env.JWT_ADMIN_SECRET);
  if (decodedData) {
    req.userId == decodedData.id;
    next();
  } else {
    res.status(403).send({
      message: "You are Signed In on this website",
    });
  }
}

module.exports = {
  adminMiddleWare: adminMiddleWare,
};
