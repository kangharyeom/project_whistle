import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const formationOptionsKorean = {
  NONE: '없음',
  FOUR_ONE_TWO_ONE_TWO: '4-1-2-1-2',
  FOUR_ONE_TWO_THREE: '4-1-2-3',
  FOUR_TWO_TWO_TWO: '4-1-2-2',
  FOUR_TWO_TREE_ONE: '4-2-3-1',
  FOUR_TREE_TWO_ONE: '4-3-2-1',
  FOUR_THREE_THREE: '4-3-3',
  FOUR_FOUR_TWO: '4-4-2',
  FOUR_FOUR_ONE_ONE: '4-4-1-1',
  FOUR_FIVE_ONE: '4-5-1',
};

const formationOptions = [  'NONE', 'FOUR_ONE_TWO_ONE_TWO', 'FOUR_ONE_TWO_THREE', 'FOUR_TWO_TWO_TWO', 'FOUR_TWO_TREE_ONE', 'FOUR_TREE_TWO_ONE', 'FOUR_THREE_THREE', 'FOUR_FOUR_TWO', 'FOUR_FOUR_ONE_ONE', 'FOUR_FIVE_ONE'];

export const FormationPostComponent = ({ formation, setFormation }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormation(value);
  };

  return (
    <Select size='small' name="locationType" value={formation} onChange={handleInputChange}>
      {formationOptions.map((option) => ( 
      <MenuItem key={option} value={option}>
        {formationOptionsKorean[option]}
      </MenuItem> 
      ))}
    </Select>
  );
};
