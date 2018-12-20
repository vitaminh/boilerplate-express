const router = require('express').Router();

// Delegate each router into its own namespace
// e.g. match all requests for '/api/models'
router.use('/models', require('./models'));

// Route not found
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
