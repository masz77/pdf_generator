import React from 'react';
import { Select } from 'antd';
import IPapersize from './../interface/paperSize';

console.log();

const resultArray = IPapersize.map(item => {
  return {
    value: item.name,
    label: item.name,
  };
});

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const PaperSizePicker = () => (
    <Select
      defaultValue= "A4"//{IPapersize.filter(size => size.name == "A4")[0].name}
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={resultArray}
    />
);
export default PaperSizePicker;