const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

//Utils
const { catchAsync } = require('../utils/catchAsync');

const createRepair = catchAsync(async (req, res, next) => {
  const { date, computerNumber, comments, userId } = req.body;
  const newRepair = await Repair.create({
    date,
    computerNumber,
    comments,
    userId,
  });

  res.status(201).json({ newRepair });
});

const getPendingRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({
    where: {
      status: 'pending',
    },
    include: [{ model: User }],
  });
  res.status(200).json({
    repairs,
  });
});

const getRepairById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  res.status(200).json({
    repair,
  });
});

const updatePendingRepair = catchAsync(async (req, res, next) => {
    const { repair } = req;
    const { status } = req.body;
    await repair.update({ status });
    res.status(200).json({ status: 'succes' });
});

const cancelRepair = catchAsync(async (req, res, next) => {
    const { repair } = req;
    const { status } = req.body;
    await repair.update({ status });
    res.status(200).json({ status: 'succes' });
});

const getAllRepairs = catchAsync(async (req, res, next) => {
    const repairs = await Repair.findAll();
    res.status(200).json({
      repairs,
    });
});

module.exports = {
  createRepair,
  getPendingRepairs,
  getRepairById,
  updatePendingRepair,
  cancelRepair,
  getAllRepairs,
};
