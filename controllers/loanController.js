const {loan} = require('../models/loan');
const {HttpCodes, CustomErrors}=require('../response');

async function addLoan(req, res, next) {
  try {
    var loanObject = new loan(req.body)
    loanObject = await loanObject.save();
    res.status(HttpCodes.CREATED).send({"result":loanObject, message:"Loan Entry created successfully"})
  } catch (ex) {
    next(ex);
  }
}



module.exports = {
  addLoan

};
