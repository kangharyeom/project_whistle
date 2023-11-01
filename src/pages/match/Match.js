import React from 'react';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Category from '../../components/category/Category';
import MatchFindRivalComponent from '../../components/match/MatchFindRival'
import MatchBeforeComponent from '../../components/match/MatchBefore'
import MatchEndComponent from '../../components/match/MatchEnd'

const StyledMatch = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MatchContainer = styled.div`
width: 100%;
max-width: 470px;
background-color: #e5f6fd;
display: flex;
  flex-direction: column;
  align-items: center;
`;

const MatchTop = styled.div`
width: 100%;
  max-width: 470px;
display: flex;
  flex-direction: column;
  align-items: center;
`;

const MatchBody = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
width: 100%;
`;

const Match = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <StyledMatch id="StyledMatchId">
      <MatchContainer id = 'MatchContainer'>
        <MatchTop id = 'MatchTop'>
        </MatchTop>

        <MatchBody id = 'MatchBody'>
          <Category />
          <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', borderRadius: '10px'}}>

          <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              aria-label="scrollable force tabs example" 
              >
              <Tab label="경기 전" />
              <Tab label="경기 종료" />
              <Tab label="상대팀 구함" />
            </Tabs>
          </Box>
            {value === 0 && <MatchBeforeComponent />}
            {value === 1 && <MatchEndComponent />}
            {value === 2 && <MatchFindRivalComponent />}
       
        </MatchBody>
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
