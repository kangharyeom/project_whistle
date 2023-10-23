import React from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import Stat from '../board/stat/Stat';
import Calender from './Calender';
import MatchInfo from './MatchInfo';

const StyledMatch = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

const MatchContainer = styled.div`
  justify-content: center;
  width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MatchTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const MatchTopAdvertisement = styled.div`
  width: 470px;
  height: 360px;
`;

const MatchBody = styled.div``;

const MatchBodyCalender = styled.div`
  width: 470px;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
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

        <Stat />
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
