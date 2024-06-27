const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res, next) => {
  // Implement your login logic here (e.g., validate credentials)
  const { username, password } = req.body;

  // Example validation (Replace with actual logic)
  if (username === 'admin' && password === 'password') {
    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { login };

