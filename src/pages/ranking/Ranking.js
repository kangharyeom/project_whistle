import React from 'react';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import SimpleSlider from '../../components/SimpleSlider';
import Category from '../../components/category/Category';
import { TeamInfoComponent } from '../../components/team/TeamInfo'

const StyledRanking = styled.div`
  z-index: 9;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingContainer = styled.div`
  width: 100%;
  max-width: 470px;
  background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingTop = styled.div`
width: 100%;
  max-width: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RankingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RankingBody = styled.div``;

const Ranking = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledRanking>
      <RankingContainer>
        <RankingTop>
            <SimpleSlider />
        </RankingTop>

        <RankingBody>
          <Category />

          <RankingInfo>
          <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons 
              allowScrollButtonsMobile 
              aria-label="scrollable force tabs example" 
              >
              <Tab label="상위 조회"/>
              <Tab label="하위 조회" />
            </Tabs>
          </Box>
            {value === 0 && <TeamInfoComponent value = {value+1}/>}
            {value === 1 && <TeamInfoComponent value = {value+1}/>}
          </RankingInfo>
        </RankingBody>
      </RankingContainer>
    </StyledRanking>
  );
};

export default Ranking;
