const router = require('express').Router();
const {addLoan} = require('../controllers/loanController');
const {validateAddLoan} = require('../middleware/validate');

router.post('/', validateAddLoan, addLoan);
module.exports = router;
