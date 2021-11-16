const router = require('express').Router();

router.use('/lookups', require('./lookups.routes'));
router.use('/climate', require('./climate.routes'));
router.use('/predictions', require('./predictions.routes'));

module.exports = router;
