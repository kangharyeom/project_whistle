import React from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider'
import BoardCategory from '../board/BoardCategory';
import BoardSports from '../board/BoardSports';
import Stat from '../board/stat/Stat';
import Calender from './Calender';

const StyledMatch = styled.div`
z-index: 9;
margin-top: 70px;
width: 100vw;
`;

const MatchContainer = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchTop = styled.div`
background-color: #F0FFFF;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
`;

const MatchTopAdvertisement = styled.div`
  width: 868px;
  height: 360px;
`;

const MatchBody = styled.div`
`;

const MatchBodyCalender = styled.div`
width: 100vw;
margin: 10px 0 10px 0;
height: 120px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const Match = () => { // 명명된 내보내기 사용

  return (
    <StyledMatch>
        <BoardSports/>
        <MatchContainer>
          <MatchTop>
            <MatchTopAdvertisement>
              <SimpleSlider/>
            </MatchTopAdvertisement>
          </MatchTop>
        
          <MatchBody>
            <BoardCategory/>
            <MatchBodyCalender>
              <Calender/>
            </MatchBodyCalender>
          </MatchBody>
          <Stat/>
        </MatchContainer>
    </StyledMatch>
  );
}

export default Match;