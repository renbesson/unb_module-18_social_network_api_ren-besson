const { User } = require('../../models');

const router = require('express').Router();

const getUsers = (req, res) => {
  console.log(req.body);
  res.status(201).json('OK');
};

const createUser = async (req, res) => {
  const body = req.body;

  try {
    const newUser = await User.create({ username: body.username, email: body.email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

///////////////////////////////////////////////////////////////////////////////
// /api/users
///////////////////////////////////////////////////////////////////////////////
router.route('/').get(getUsers).post(createUser);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
