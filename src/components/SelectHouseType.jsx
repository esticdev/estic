import React, { useState } from "react";
import { Select } from 'antd';

const SelectHouseType = () => {
    const [data, setData] = useState([
        {
            text: 'Apartment',
            value: 'Apartment'
        },
        {
            text: 'Condo',
            value: 'condo'
        },
        {
            text: 'Co-op',
            value: 'co-op'
        },
        {
            text: 'Single Family',
            value: 'single-detached'
        },
        {
            text: 'Tiny Home',
            value: 'tiny'
        },
        {
            text: 'Townhouse',
            value: 'townhouse'
        },
        {
            text: 'Cape Cod',
            value: 'cape-cod'
        },
        {
            text: 'Colonial',
            value: 'colonial'
        },
        {
            text: 'Contemporary',
            value: 'contemporary'
        },
        {
            text: 'Craftsman',
            value: 'craftsman'
        }
    ]);
    const [value, setValue] = useState();
    const handleSearch = (newValue) => {
        if (newValue) {
            fetch(newValue, setData);
        } else {
            setData([]);
        }
    };
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <Select
            value={value}
            placeholder="Type of house"
            onSearch={handleSearch}
            onChange={handleChange}
            showSearch
            size={'large'}
            style={{
                width: '80%',
            }}
            options={(data || []).map((d) => ({
                value: d.value,
                label: d.text,
            }))}
        />
    )
}

export default SelectHouseType