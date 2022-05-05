const express = require('express');

//controller
const {
  getAllUser,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

//Middlewares
const { userEsxist } = require('../middlewares/users.middlewares');
//Middlewares for express-validator
const {createUserValidator, checkValidations} = require('../middlewares/validations.middlewares')
const router = express.Router();

router.route('/')
  .get(getAllUser)
  .post(
    createUserValidator,
    checkValidations,
    createUser);

router
  .use('/:id', userEsxist)
  .route('/:id')
  .get(getUserbyId)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = { usersRouter: router };
