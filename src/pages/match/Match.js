import React from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import Stat from '../board/stat/Stat';
import Calender from './Calender';
import MatchInfo from './MatchInfo';

const StyledMatch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MatchContainer = styled.div`
background-color:white;
`;

const MatchTop = styled.div`
`;

const MatchTopAdvertisement = styled.div``;
const MatchBody = styled.div``;
const MatchBodyCalender = styled.div``;

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

        <Stat />
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
