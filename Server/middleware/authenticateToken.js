const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// authentication  JWTtoken middleware 
const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const accessToken = authHeader.split(' ')[1];
  
      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403);
        }
  
        req.user = user;
        next();
      })
    }
    else {
      return res.status(403)
    }
  }

  module.exports = authenticateJwt;