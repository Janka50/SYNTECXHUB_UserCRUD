const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'Access granted',
    user: req.user
  });
});

module.exports = router;
