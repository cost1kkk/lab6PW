
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({ message: 'Token not provided' });
  }

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = { verifyToken };
