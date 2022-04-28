const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

const createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const newRepair = await Repair.create({ date, userId });
    const user = await User.findOne({ where: { id: userId } });
    if (!user || user.status !== 'available') {
      return res.status(403).json({
        status: 'error',
        message: 'User Id is not available',
      });
    }

    res.status(201).json({ newRepair });
  } catch (error) {}
};

const getPendingRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { repair } = req;

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updatePendingRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });
    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};

const cancelRepair = async (req, res) => {
  try {
    const { repair } = req;
    const { status } = req.body;

    await repair.update({ status });
    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll();
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRepair,
  getPendingRepairs,
  getRepairById,
  updatePendingRepair,
  cancelRepair,
  getAllRepairs,
};
