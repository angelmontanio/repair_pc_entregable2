const express = require('express');

//controller
const {
  getAllUser,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const { userEsxist } = require('../middlewares/users.middlewares');

const router = express.Router();

router.get('/', getAllUser);

router.post('/', createUser);

router
  .route('/:id')
  .get(userEsxist, getUserbyId)
  .patch(userEsxist, updateUser)
  .delete(userEsxist, deleteUser);

module.exports = { usersRouter: router };
