const Countries = require('../models/Countries');

async function getCountries(req, res, next) {
    try {
        const countriesList = await Countries.getCountries();

        res.send(countriesList);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getCountries,
};
