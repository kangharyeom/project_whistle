import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FrequencyOptionsKorean = {
  NONE: '없음',
  WEEK_DAY: '평일',
  WEEK_END: '주말',
  ANY_TIME: '언제든지',
  SUNDAY: '일요일',
  MONDAY: '월요일',
  TUESDAY: '화요일',
  WEDNESDAY: '수요일',
  THURSDAY: '목요일',
  FRIDAY: '금요일',
  SATURDAY: '토요일',
};

const FrequencyOptions = ['NONE', 'WEEK_DAY', 'WEEK_END', 'ANY_TIME', 'SUNDAY', 'MONDAY','TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

export const FrequencyPostComponent = ({ frequency, setFrequency }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setFrequency(value);
  };

  return (
    <Select size='small' name="frequency" value={frequency} onChange={handleInputChange}>
      {FrequencyOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {FrequencyOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
