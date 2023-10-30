import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ageTypeOptionsKorean = {
  TEENAGER: '10대',
  UNIVERSITY_STUDENT: '대학생',
  OFFICE_WORKER: '직장인',
  EARLY_SOCCER: '조기축구',
};

const ageTypeOptions = ['TEENAGER', 'UNIVERSITY_STUDENT', 'OFFICE_WORKER', 'EARLY_SOCCER'];

export const AgeTypePostComponent = ({ ageType, setAgeType }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setAgeType(value);
  };

  return (
    <Select size='small' name="ageType" value={ageType} onChange={handleInputChange}>
      {ageTypeOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {ageTypeOptionsKorean[option]}
        </MenuItem>
      ))}
    </Select>
  );
};
