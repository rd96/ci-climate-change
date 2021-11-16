import axios from "axios";

export async function getCountries() {
    const { data } = await axios.get('/api/lookups/countries');

    return data.map(({ iso3, country }) => ({ label: country, value: iso3 }));
}

export async function getAverageAnnualTemperaturesForCountry(iso3) {
    const { data } = await axios.get(`/api/climate/averages/${iso3}/annual`);

    return data;
}

export async function getAverageMonthlyTemperaturesForCountry(iso3) {
    const { data } = await axios.get(`/api/climate/averages/${iso3}/monthly`);

    return data;
}