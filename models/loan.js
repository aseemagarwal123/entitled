const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const timestamps = require('mongoose-timestamp');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const loanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  pan: {
    type: String,
    unique: true,
    required: [true, "pan no is required"]
  },
  emp_id: {
    type: String,
    unique: true,
    required: [true, "employee id is required"]
  },
  amt_req: {
    type: Number,
    required: [true, "amount is required"]
  },
  num_emis: {
    type: Number,
    required: [true, "number is required"]
  },
});

loanSchema.plugin(timestamps);
loanSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });
const loan = mongoose.model('loans', loanSchema);
exports.loan = loan;
