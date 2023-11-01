import React from 'react';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Category from '../../components/category/Category';
import { LeagueInfoComponent } from '../../components/league/LeagueInfo';

const StyledLeague = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeagueContainer = styled.div`
width: 100%;
max-width: 470px;
background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeagueTop = styled.div`
width: 100%;
  max-width: 470px;
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeagueSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeagueBody = styled.div``;

const League = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <StyledLeague>
      <LeagueContainer>
        <LeagueTop>
        </LeagueTop>

        <LeagueBody>
          <Category />
          <LeagueSchedule>
          <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', borderRadius: '10px'}}>

            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              aria-label="scrollable force tabs example" 
              >
              <Tab label="온시즌" />
              <Tab label="오프시즌" />
              <Tab label="팀모집" />
            </Tabs>
          </Box>
            {value === 0 && <LeagueInfoComponent value = {value}/>}
            {value === 1 && <LeagueInfoComponent value = {value}/>}
            {value === 2 && <LeagueInfoComponent value = {value}/>}
          </LeagueSchedule>
        </LeagueBody>

      </LeagueContainer>
    </StyledLeague>
  );
};

export default League;
