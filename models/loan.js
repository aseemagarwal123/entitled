const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const loanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    unique: true,
    required: true,
  },
  emp_id: {
    type: String,
    unique: true,
    required: true,
  },
  amt_req: {
    type: Number,
    required: true,
  },
  num_emis: {
    type: Number,
    required: true,
  },
});

loanSchema.plugin(timestamps);
const loan = mongoose.model('loans', loanSchema);
exports.loan = loan;
