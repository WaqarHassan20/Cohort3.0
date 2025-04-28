import jwt, { decode } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Authorization is required" });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
      req.userId = decodedData.id;

      next();
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
