//Models
const { Repair } = require('../models/repair.model');

const repairExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });

    if (!repair || repair.status !== 'pending') {
      return res.status(404).json({
        status: 'error',
        message: 'Repair pending not found given that id',
      });
    }
    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairExist };
