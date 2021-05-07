const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.methods === "OPTIONS") {
    return next();
  }
  try {
    if (!req.headers.authorization) {
      res.status(403).send("missing token header");
      return;
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(403).send("missing token");
      return;
    }
    //verify token is valid
    let payload=jwt.verify(token,"Aatacr19bp")
    console.log(payload);
    req.userId=payload.userId;
    next();
  } catch (err) {
    res.status(403).send("token verification faild " + req.headers.authorization);
    return; 
  }
};
