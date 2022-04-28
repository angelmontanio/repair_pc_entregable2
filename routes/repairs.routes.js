const express = require('express');

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

const router = express.Router();

router.get('/', getPendingRepairs);

router.get('/all', getAllRepairs);

router.post('/', createRepair);

router
  .route('/:id')
  .get(repairExist, getRepairById)
  .patch(repairExist, updatePendingRepair)
  .delete(repairExist, cancelRepair);
module.exports = { repairsRouter: router };
