const {loan} = require('../models/loan');
async function validateJobRegister(req, res, next) {
  try {
    next();
  } catch (ex) {
    res.status(500).send(ex);
  }
}
module.exports = {
  validateJobRegister,
};
