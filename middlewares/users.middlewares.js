//Models
const { User } = require('../models/user.model');


//AppError constructor
const {AppError} = require('../utils/appError');
//Utils
const { catchAsync } = require('../utils/catchAsync');

const userEsxist = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError('User does not exit whitg given Id', 404));
  }
  req.user = user;
  next();
});

module.exports = { userEsxist };
