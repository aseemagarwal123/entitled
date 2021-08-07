const {loan} = require('../models/loan');
const {HttpCodes, CustomErrors}=require('../response');
async function validateAddLoan(req, res, next) {
  try {
    const body = req.body;
    if(isNaN(body.amt_req)){
      return res.status(HttpCodes.BAD_REQUEST).send({message: "Amount should be a valid numnber"});
    }
    if(isNaN(body.num_emis)){
      return res.status(HttpCodes.BAD_REQUEST).send({message: "Number of EMI should be a valid numnber"});
    }
    next();
  } catch (ex) {
    console.log(ex)
    res.status(500).send(ex);
  }
}
module.exports = {
  validateAddLoan,
};
