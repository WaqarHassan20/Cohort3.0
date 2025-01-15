const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

  try {
    if (decoded) {
      req.adminId = decoded.id;
      next();
    } else {
      res.status(403).send({
        message: "You are an authorized ADMIN",
      });
    }
  } catch (error) {
    res.status(403).send({
      Error: error,
    });
  }
}

module.exports = {
  adminMiddleware: adminMiddleware,
};
