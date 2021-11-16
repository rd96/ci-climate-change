const router = require('express').Router();

const { getCountries } = require('../controllers/lookupsController');

router.get('/countries', getCountries);

module.exports = router;
