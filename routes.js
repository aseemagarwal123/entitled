const router = require('express').Router();
const loanRoute = require('./routes/loanRoute');


router.use('/api/v1/loan', loanRoute);

module.exports = router;