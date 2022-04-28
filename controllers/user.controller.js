const { User } = require('../models/user.model');

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user= await User.findOne({where:{email}})
    if(user){
      return res.status(403).json({
        status: 'error',
        message: 'your email already exists in the database'
      })
    }
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const getUserbyId = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({ name, email });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
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
