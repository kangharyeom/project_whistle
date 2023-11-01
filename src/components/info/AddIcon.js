import React from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const AddIconComponent = () => {
    return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </> 
  )
}