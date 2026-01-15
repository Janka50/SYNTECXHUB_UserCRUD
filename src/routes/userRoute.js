const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const {
  createUserValidationRules,
  validate,
  isValidMongoId
} = require('../validators/userValidator');

const router = express.Router();

// CREATE
router.post(
  '/api/users',
  createUserValidationRules(),
  validate,
  createUser
);

// READ ALL
router.get('/api/users', getUsers);

// READ ONE
router.get('/api/users/:id', isValidMongoId, getUserById);

// UPDATE
router.put('/api/users/:id', isValidMongoId, updateUser);

// DELETE
router.delete('/api/users/:id', isValidMongoId, deleteUser);

module.exports = router;
