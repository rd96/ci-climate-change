const climate = require('../utils/climate');

async function getClimateDataByCountry(iso3) {
    const climateData = await climate.readClimateData();
    const dataForCountry = climateData
        .filter((d) => d.iso3 === iso3);

    return dataForCountry;
}

module.exports = {
    getClimateDataByCountry,
};
