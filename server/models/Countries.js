const climate = require('../utils/climate');

async function getCountries() {
    const climateData = await climate.readClimateData();
    const countriesMap = new Map();

    climateData.forEach(({ country, iso3 }) => {
        if (!countriesMap.has(iso3)) countriesMap.set(iso3, country);
    });

    return [...countriesMap.entries()].map(([iso3, country]) => ({ iso3, country }));
}

module.exports = {
    getCountries,
};
