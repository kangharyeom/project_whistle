import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const LevelTypeOptionsKorean = {
  LOWEST: '최하',
  LOWER: '하',
  MIDDLE: '중',
  UPPER: '상',
  HIGHEST: '최상',
};

const LevelTypeOptions = ['LOWEST', 'LOWER', 'MIDDLE', 'UPPER', 'HIGHEST'];

export const LevelTypePostComponent = ({ levelType, setLevelType }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setLevelType(value);
  };

  return (
    <Select size='small' name="levelType" value={levelType} onChange={handleInputChange}>
      {LevelTypeOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {LevelTypeOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
