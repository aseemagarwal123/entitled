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
    validate: {
      validator: function(v) {
        return /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(v);
      },
      message: props => `${props.value} is not a valid pan number`
    },
    unique: true,
    required: [true, 'Pan No required']
  },
  emp_id: {
    type: String,
    unique: true,
    required: [true, "Employee Id is required"]
  },
  amt_req: {
    type: Number,
    required: [true, "Amount is required"]
  },
  num_emis: {
    type: Number,
    required: [true, "Number of EMI is required"]
  },
});

loanSchema.plugin(timestamps);
loanSchema.plugin(uniqueValidator, { message: 'Error, {PATH} Already exists' });
const loan = mongoose.model('loans', loanSchema);
exports.loan = loan;
