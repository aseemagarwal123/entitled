const router = require('express').Router();
const {addLoan} = require('../controllers/loanController');

router.post('/', addLoan);
module.exports = router;
