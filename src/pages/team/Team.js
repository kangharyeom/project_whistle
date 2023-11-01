import React from 'react';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Category from '../../components/category/Category';
import { TeamInfoComponent } from '../../components/team/TeamInfo'
import { TeamMemberRecruitComponent } from '../../components/team/Recruit';

const StyledTeam = styled.div`
  z-index: 9;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamContainer = styled.div`
  width: 100%;
  max-width: 470px;
  background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTop = styled.div`
width: 100%;
  max-width: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TeamBody = styled.div``;

const Team = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledTeam>
      <TeamContainer>
        <TeamTop>
        </TeamTop>

        <TeamBody>
          <Category />

          <TeamInfo>
          <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', borderRadius: '10px'}}>

            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons 
              allowScrollButtonsMobile 
              aria-label="scrollable force tabs example" 
              >
              <Tab label="팀 정보" />
              <Tab label="용병 모집" />
            </Tabs>
          </Box>
            {value === 0 && <TeamInfoComponent value={value}/>}
            {value === 1 && <TeamMemberRecruitComponent />}
          </TeamInfo>
        </TeamBody>
      </TeamContainer>
    </StyledTeam>
  );
};

export default Team;
