import jwt from "jsonwebtoken";

const verifyAuthToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization token",
    });
  }

  token = token.split("")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  });

  next();
};

export default verifyAuthToken;
