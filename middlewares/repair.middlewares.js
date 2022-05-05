//Models
const { Repair } = require('../models/repair.model');
//Utils
const {catchAsync} = require('../utils/catchAsync');
//AppError constructor
const {AppError} = require('../utils/appError');

const repairExist = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });

    if (!repair || repair.status !== 'pending') {
      return next(new AppError('User does not exit whitg given Id, or is not pennding', 404));
    }
    req.repair = repair;
    next();
});

module.exports = { repairExist };
