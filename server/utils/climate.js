const fs = require('fs').promises;

const STATISTICS_MAP = ['Jan Average', 'Feb Average', 'Mar Average', 'Apr Average', 'May Average', 'Jun Average', 'Jul Average', 'Aug Average', 'Sep Average', 'Oct Average', 'Nov Average', 'Dec Average'];
const CLIMATE_DATA_FILE = './data/ClimateDataActual.csv';
const CLIMATE_PREDICTIONS_FILE = './data/ClimateChangePrediction.csv';

function convertStatisticsToDate(year, statistics) {
    const month = STATISTICS_MAP.indexOf(statistics);

    return new Date(year, month);
}

function formatClimateData({
    temperature, year, statistics, ...data
}) {
    return {
        temperature: Number.parseFloat(temperature),
        year: Number.parseInt(year, 10),
        statistics,
        date: convertStatisticsToDate(year, statistics),
        ...data,
    };
}

async function readCsv(filename) {
    const csv = await fs.readFile(filename, 'utf-8');

    return csv
        .split(/\r?\n/)
        .slice(1)
        .filter((row) => row.trim().length !== 0);
}

// parse the ClimateDataActual.csv file
// file contains 5 columns:
// Temperature - (Celsius), Year, Statistics, Country, ISO3
// Country column sometimes contains data with a comma
async function readClimateData() {
    const climateData = await readCsv(CLIMATE_DATA_FILE);

    return climateData.map((row, index) => {
        const data = row.split(', ');

        if (data.length === 5) {
            const [temperature, year, statistics, country, iso3] = data;

            return formatClimateData({
                temperature,
                year,
                statistics,
                country,
                iso3,
            });
        }

        if (data.length === 6) {
            const [temperature, year, statistics, country, countryPrefix, iso3] = data;

            return formatClimateData({
                temperature,
                year,
                statistics,
                country: `${country}, ${countryPrefix}`,
                iso3,
            });
        }
        console.error(data, index);
        throw new Error('Could not parse climate data');
    });
}

// parse the ClimateDataPrediction.csv file
// file contains 5 columns:
// Temperature - (Celsius), Year, Statistics, Country, ISO3
// Country column sometimes contains data with a comma
async function readClimateChangePrediction() {
    const climatePredictions = await readCsv(CLIMATE_PREDICTIONS_FILE);

    return climatePredictions.map((row, index) => {
        const data = row.split(', ');

        if (data.length === 6) {
            const [temperature, year, model, statistics, country, iso3] = data;

            return formatClimateData({
                temperature,
                year,
                model,
                statistics,
                country,
                iso3,
            });
        }

        if (data.length === 7) {
            const [temperature, year, model, statistics, country, countryPrefix, iso3] = data;

            return formatClimateData({
                temperature,
                year,
                model,
                statistics,
                country: `${country}, ${countryPrefix}`,
                iso3,
            });
        }

        console.error(data, index);
        throw new Error('Could not parse climate predictions data');
    });
}

module.exports = {
    readClimateData,
    readClimateChangePrediction,
};
