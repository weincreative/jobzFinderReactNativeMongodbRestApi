const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authorization = req.header("Authorization");
  if (!authorization) {
    res.status(401).send("Access denied. No token provider !");
    return;
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, "vennApp", (error, decoded) => {
    if (error) {
      res.status(401).send("Invalid token.");
      return;
    }

    req.userId = decoded._id;
    next();
  });
}

module.exports = verifyToken;
