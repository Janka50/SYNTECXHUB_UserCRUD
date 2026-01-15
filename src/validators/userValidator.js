const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');

const createUserValidationRules = () => [
  body('username')
    .isString().withMessage('username must be a string')
    .isLength({ min: 5 }).withMessage('Username must be at least 5 characters')
    .isAlphanumeric().withMessage('Username must contain only letters and numbers'),

  body('email')
    .isEmail().withMessage('Please enter a valid email address'),
];

// middleware to handle validation result
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const isValidMongoId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid MongoDB ID format' });
  }
  next();
};

module.exports = {
  createUserValidationRules,
  validate,
  isValidMongoId,
};
