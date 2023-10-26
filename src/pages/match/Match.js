import React from 'react';
import styled from 'styled-components';

import SimpleSlider from '../../components/SimpleSlider';
import BoardCategory from '../../components/BoardCategory';
import Calender from '../../components/Calender';
import MatchInfo from './MatchInfo';

const StyledMatch = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MatchContainer = styled.div`
width: 100%;
background-color:white;
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
          <BoardCategory />
            <Calender />
          <MatchInfo/>
       
        </MatchBody>
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
