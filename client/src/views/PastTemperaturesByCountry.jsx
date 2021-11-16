import React, { useState } from 'react';

import CountryPicker from '../components/CountryPicker';
import YearlyAveragesChart from '../components/YearlyAveragesChart';
import MonthlyAveragesChart from '../components/MonthlyAveragesChart';
import { Space, Typography } from 'antd';

const { Title } = Typography;

function PastTemperaturesByCountry() {
    const [iso3, setIso3] = useState(null);

    return (
        <Space size={16} direction="vertical" style={{ width: '100%' }}>
            <CountryPicker onChange={setIso3} />
            <Title level={2}>Average yearly temperatures</Title>
            <YearlyAveragesChart iso3={iso3} />
            <Title level={2}>Average monthly temperatures</Title>
            <MonthlyAveragesChart iso3={iso3} />
        </Space>
    )
}

export default PastTemperaturesByCountry;
