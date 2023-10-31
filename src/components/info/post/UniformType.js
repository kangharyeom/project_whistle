import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const UniformTypeOptionsKorean = {
  NONE: '없음',
  RED: '빨간색',
  ORANGE: '주황색',
  YELLOW: '노란색',
  GREEN: '초록색',
  BLUE: '파란색',
  PURPLE: '보라색',
  BLACK: '검정색',
  WHITE: '흰색',
};
const UniformTypeOptions = [ 'NONE', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BLACK', 'WHITE'];

export const UniformTypePostComponent = ({ uniformType, setUniformType }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setUniformType(value);
  };

  return (
    <Select size='small' name="uniformType" value={uniformType} onChange={handleInputChange}>
      {UniformTypeOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {UniformTypeOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
