import React from 'react';
import TextField from '@mui/material/TextField';

export const LeagueNamePostComponent = ({ leagueName, setLeagueName }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setLeagueName(value);
  };

  return (
    <>
    <TextField size='small' name="leagueName" value={leagueName} onChange={handleInputChange}/>
    </>
  );
};
