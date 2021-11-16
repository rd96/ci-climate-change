const router = require('express').Router();

const { getPredictionsForCountry } = require('../controllers/predictionsController');

router.get('/:iso3', getPredictionsForCountry);

module.exports = router;
