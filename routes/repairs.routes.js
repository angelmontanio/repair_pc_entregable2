const express = require('express');
const { body } = require('express-validator');

//Controller
const {
  createRepair,
  getPendingRepairs,
  getRepairById,
  updatePendingRepair,
  cancelRepair,
  getAllRepairs,
} = require('../controllers/repairs.controller');

//middlewares
const { repairExist } = require('../middlewares/repair.middlewares');
const {
  checkValidations,
  createPostValidations,
} = require('../middlewares/validations.middlewares');

const router = express.Router();

router
  .route('/')
  .get(getPendingRepairs)
  .post(createPostValidations, checkValidations, createRepair);

  router.get('/all', getAllRepairs);

router
  .route('/:id')
  .get(repairExist, getRepairById)
  .patch(repairExist, updatePendingRepair)
  .delete(repairExist, cancelRepair);
module.exports = { repairsRouter: router };
