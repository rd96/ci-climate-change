import React, { useEffect, useState } from 'react';

import { Line } from '@ant-design/charts';

import { getAverageAnnualTemperaturesForCountry } from '../utils/climateApi';

function LineChart({ iso3 }) {
    const [climateData, setClimateData] = useState([]);

    const chartConfig = {
        data: climateData,
        xField: 'year',
        yField: 'averageTemperature',
        seriesField: 'category',
    };

    useEffect(() => {
        async function fetchData() {
            const climateData = await getAverageAnnualTemperaturesForCountry(iso3);

            setClimateData(climateData);
        }

        if (iso3) fetchData();
    }, [iso3]);

    return <Line {...chartConfig} />;
}

export default LineChart;