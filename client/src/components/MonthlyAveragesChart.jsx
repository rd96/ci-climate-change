import React, { useEffect, useState } from 'react';

import { Line } from '@ant-design/charts';

import { getAverageMonthlyTemperaturesForCountry } from '../utils/climateApi';

function MonthlyAveragesChart({ iso3 }) {
    const [climateData, setClimateData] = useState([]);

    const chartConfig = {
        data: climateData,
        xField: 'year',
        yField: 'temperature',
        seriesField: 'statistics',
        smooth: true,
    }

    useEffect(() => {
        async function fetchData() {
            const climateData = await getAverageMonthlyTemperaturesForCountry(iso3);

            setClimateData(climateData);
        }

        if (iso3) fetchData();
    }, [iso3]);

    return <Line {...chartConfig} />;
}

export default MonthlyAveragesChart;