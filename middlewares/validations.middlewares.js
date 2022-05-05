const { body, validationResult } = require('express-validator');
//AppError constructor
const {AppError} = require('../utils/appError');


const createUserValidator = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('This is a not a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isLength({ min: 8, max: 20 })
    .withMessage(
      'The password must have more than 8 characters and a maximum of 20'
    ),
];

const createPostValidations = [
  body('computerNumber')
    .notEmpty()
    .withMessage('computerNumber cannot be empty'),

  body('comments')
    .notEmpty()
    .withMessage('comments cannot be empty')
    .isLength({ min: 20, max: 140 })
    .withMessage(
      'The comments must have more than 20 characters and a maximum of 140'
    ),
    body('date')
      .notEmpty()
      .withMessage('date cannot be empty')
      .isDate()
      .withMessage('date is not valid date')     
];



const checkValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);
    const errorsMsg = messages.join('. ');
    return next(new AppError(errorsMsg, 404));
  }

  next();
};

module.exports = {
  createUserValidator,
  createPostValidations,
  checkValidations,
};
