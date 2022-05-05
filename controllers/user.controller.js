const { User } = require('../models/user.model');

//Utils
const {catchAsync} = require('../utils/catchAsync')

const getAllUser = catchAsync (async (req, res, next) => {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
});

const createUser = catchAsync (async (req, res, next) => {

    const { name, email, password, role } = req.body;
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ newUser });
});

const getUserbyId = catchAsync ( async (req, res, next) => {
    const { user } = req;
    res.status(200).json({
      user,
    });
});

const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({ name, email });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    await user.update({ status: 'disabled' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser,
};
