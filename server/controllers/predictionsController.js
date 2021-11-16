const climate = require('../utils/climate');

async function getPredictionsForCountry(req, res, next) {
    try {
        const { iso3 } = req.params;

        const predictionsData = await climate.readClimateChangePrediction();
        const dataForCountry = predictionsData
            .filter((d) => d.iso3 === iso3)
            .map(({ model, temperature, date }) => ({ model, temperature, date }));

        res.send(dataForCountry);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getPredictionsForCountry,
};
