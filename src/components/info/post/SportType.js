import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SportsTypeOptionsKorean = {
  SOCCER: '축구',
  // FUTSAL: '풋살',
  // BASEBALL: '야구',
  // BASKETBALL: '농구',
};

const SportsTypeOptions = [ 'SOCCER', 'FUTSAL', 'BASEBALL', 'BASKETBALL'];

export const SportsTypePostComponent = ({ sportsType, setSportsType }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSportsType(value);
  };

  return (
    <Select size='small' name="sportsType" value={sportsType} onChange={handleInputChange}>
      {SportsTypeOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {SportsTypeOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
