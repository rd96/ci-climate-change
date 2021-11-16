const router = require('express').Router();

const { getAverageClimateByCountry, getAverageMonthlyTemperaturesForCountry, getAverageAnnualTemperaturesForCountry } = require('../controllers/climateController');

router.get('/averages', getAverageClimateByCountry);
router.get('/averages/:iso3/monthly', getAverageMonthlyTemperaturesForCountry);
router.get('/averages/:iso3/annual', getAverageAnnualTemperaturesForCountry);

module.exports = router;
