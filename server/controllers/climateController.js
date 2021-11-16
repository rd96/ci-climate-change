// this file would be great if it could actually do as it's named :)

const { getClimateDataByCountry } = require('../models/Climate');
const climate = require('../utils/climate');

async function getAverageClimateByCountry(req, res, next) {
    try {
        const climateData = await climate.readClimateData();

        const dataByCountry = new Map();

        climateData.forEach(({ temperature, country, iso3 }) => {
            const countryData = dataByCountry.get(iso3) || { temperatures: [], country, iso3 };

            countryData.temperatures.push(temperature);

            dataByCountry.set(iso3, countryData);
        });

        res.send(
            [...dataByCountry.values()]
                .map(({ temperatures, country, iso3 }) => ({
                    country,
                    iso3,
                    averageTemperature: temperatures
                        .reduce((sum, temp) => sum + temp, 0) / temperatures.length,
                })),
        );
    } catch (e) {
        next(e);
    }
}

async function getAverageMonthlyTemperaturesForCountry(req, res, next) {
    try {
        const { iso3 } = req.params;

        const climateByCountry = await getClimateDataByCountry(iso3);

        res.send(climateByCountry);
    } catch (e) {
        next(e);
    }
}

async function getAverageAnnualTemperaturesForCountry(req, res, next) {
    try {
        const { iso3 } = req.params;

        const climateByCountry = await getClimateDataByCountry(iso3);

        const annualAverages = new Map();

        climateByCountry.forEach(({ temperature, year }) => {
            const temps = annualAverages.get(year) || [];

            temps.push(temperature);

            annualAverages.set(year, temps);
        });

        const annualMinMaxAverages = [...annualAverages.entries()]
            .map(([year, temperatures]) => {
                const maxTemp = Math.max(...temperatures);
                const minTemp = Math.min(...temperatures);

                return {
                    year,
                    averageTemperature: ((maxTemp + minTemp) / 2),
                    category: 'minMaxAverage',
                };
            });

        const annualMeanAverages = [...annualAverages.entries()]
            .map(([year, temperatures]) => ({
                year,
                averageTemperature: (temperatures
                    .reduce((sum, temp) => sum + temp, 0)
                    / temperatures.length),
                category: 'meanAverage',
            }));

        res.send(annualMinMaxAverages.concat(...annualMeanAverages));
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getAverageClimateByCountry,
    getAverageMonthlyTemperaturesForCountry,
    getAverageAnnualTemperaturesForCountry,
};
