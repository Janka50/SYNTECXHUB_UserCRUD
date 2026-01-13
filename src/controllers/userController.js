// controllers/userController.js
const User = require('../models/User');

// Create a new user (POST /api/users)
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user); // 201 Created
  } catch (error) {
    res.status(400).send(error); // 400 Bad Request
  }
};

// Read all users (GET /api/users)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users); // 200 OK
  } catch (error) {
    res.status(500).send(error); // 500 Internal Server Error
  }
};

// Read a single user by ID (GET /api/users/:id)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' }); // 404 Not Found
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a user by ID (PUT /api/users/:id)
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a user by ID (DELETE /api/users/:id)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send({ message: 'User deleted successfully', user }); // 200 OK
  } catch (error) {
    res.status(500).send(error);
  }
};
