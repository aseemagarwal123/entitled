const {loan} = require('../models/loan');
const {HttpCodes, CustomErrors}=require('../response');

async function addLoan(req, res, next) {
  try {
    var loanObject = new loan(req.body)
    loanObject = await loanObject.save();
    res.send(loanObject)
  } catch (ex) {
    console.log(ex)
    next(ex);
  }
}



module.exports = {
  addLoan

};
