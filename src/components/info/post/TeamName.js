import React from 'react';
import TextField from '@mui/material/TextField';

export const TeamNamePostComponent = ({ teamName, setTeamName }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    setTeamName(value);
  };

  return (
    <>
    <TextField size='small' labelId="TeamLabelId" name="teamName" value={teamName} onChange={handleInputChange}/>
    </>
  );
};
