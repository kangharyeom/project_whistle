import React from 'react';
import styled from 'styled-components';

import SimpleSlider from '../../components/SimpleSlider';
import Category from '../../components/category/Category';
import MatchCategory from '../../components/category/MatchCategory';
import Calender from '../../components/Calender';
import HomeTeamInfo from './HomeTeamInfo';

const StyledMatch = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
  return (
    <StyledMatch id="StyledMatchId">
      <MatchContainer id = 'MatchContainer'>
        <MatchTop id = 'MatchTop'>
          <SimpleSlider />
        </MatchTop>

        <MatchBody id = 'MatchBody'>
          <Category />
          <Calender />
          <MatchCategory />
          <HomeTeamInfo/>
       
        </MatchBody>
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
