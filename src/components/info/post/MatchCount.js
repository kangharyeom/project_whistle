import React from 'react';
import TextField from '@mui/material/TextField';

export const MatchCountPostComponent = ({ matchCount, setMatchCount }) => {
    const handleNumberInputChange = (e) => {
        // 입력된 값이 숫자인지 확인하고 숫자이면 state를 업데이트합니다.
        const value = e.target.value;
        if (/^\d+$/.test(value) || value === '') {
          setMatchCount(value);
        }
      };

  return (
    <>
        <TextField 
            size='small' 
            type='number' 
            name="matchCount" 
            value={matchCount} 
            onChange={handleNumberInputChange}
        />
    </>
  );
};
