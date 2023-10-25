import React from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import Calender from './Calender';
import MatchInfo from './MatchInfo';

const StyledMatch = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const MatchTopAdvertisement = styled.div`
width: 100%;
`;
const MatchBody = styled.div`
width: 100%;
`;
const MatchBodyCalender = styled.div`
width: 100%;
`;

const Match = () => {
  
  return (
    <StyledMatch id="StyledMatchId">
      <MatchContainer>
        <MatchTop>
          <MatchTopAdvertisement>
            <SimpleSlider />
          </MatchTopAdvertisement>
        </MatchTop>

        <MatchBody>
          <BoardCategory />
          <MatchBodyCalender>
            <Calender />
          </MatchBodyCalender>
          <MatchInfo/>
       
        </MatchBody>
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
