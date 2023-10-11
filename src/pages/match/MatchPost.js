import React from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider'
import BoardCategory from '../board/BoardCategory';
import BoardSports from '../board/BoardSports';
import Stat from '../board/stat/Stat';
import Calender from '../matching/Calender';

const StyledMatching = styled.div`
z-index: 9;
margin-top: 70px;
width: 100vw;
`;

const MatchingContainer = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchingTop = styled.div`
background-color: #F0FFFF;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
`;

const MatchingTopAdvertisement = styled.div`
  width: 868px;
  height: 360px;
`;

const MatchingBody = styled.div`
`;

const MatchingBodyCalender = styled.div`
width: 100vw;
margin: 10px 0 10px 0;
height: 120px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const Matching = () => { // 명명된 내보내기 사용

  return (
    <StyledMatching>
        <BoardSports/>
        <MatchingContainer>
          <MatchingTop>
            <MatchingTopAdvertisement>
              <SimpleSlider/>
            </MatchingTopAdvertisement>
          </MatchingTop>
        
          <MatchingBody>
            <BoardCategory/>
            <MatchingBodyCalender>
              <Calender/>
            </MatchingBodyCalender>
          </MatchingBody>
          <Stat/>
        </MatchingContainer>
    </StyledMatching>
  );
}

export default Matching;