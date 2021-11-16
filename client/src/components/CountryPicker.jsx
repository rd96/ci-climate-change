import React, { useEffect, useState } from "react";

import { Select } from 'antd';
import { getCountries } from "../utils/climateApi";

function CountryPicker({ onChange }) {
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);

    function handleChange(value) {
        console.log(value);
        setSelectedValue(value);
        onChange(value);
    }

    useEffect(() => {
        async function fetchCountries() {
            const countries = await getCountries();

            setOptions(countries);
            if (countries.length) {
                setSelectedValue(countries[0].value);
                onChange(countries[0].value);
            }
        }

        fetchCountries();
    }, [onChange]);

    return <Select value={selectedValue} style={{ width: 200 }} loading={options.length === 0} options={options} showSearch onChange={handleChange} />;
}

export default CountryPicker;