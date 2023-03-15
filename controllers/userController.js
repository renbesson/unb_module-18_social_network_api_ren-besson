const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserbyId = async ({ params }, res) => {
  const userId = params.userId;

  try {
    const users = await User.find({ _id: userId });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async ({ body }, res) => {
  try {
    const newUser = await User.create({ username: body.username, email: body.email });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateUserById = async ({ params, body }, res) => {
  const userId = params.userId;
  const newUsername = body.username;
  const newEmail = body.email;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { username: newUsername, email: newEmail },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUserById = async ({ params }, res) => {
  const userId = params.userId;

  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getUsers, getUserbyId, createUser, updateUserById, deleteUserById };
