import React from 'react';
import styled from 'styled-components';

import "react-day-picker/dist/style.css";

import Advertisement from './Advertisement';

const StyledMatching = styled.div`
width: 100vw;
`;

const MatchingContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchingTop = styled.div`
background-color: #F0FFFF;
width: 100vw;
`;

const MatchingBody = styled.div`
`;

const MatchingBodyCalender = styled.div`
width: 1024px;
margin: 10px 0 10px 0;
background-color: #f3d276;
height: 120px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const Matching = () => { // 명명된 내보내기 사용

  return (
    <StyledMatching>
        <MatchingContainer>
          <MatchingTop>
            <Advertisement/>
          </MatchingTop>
        
          <MatchingBody>
            <MatchingBodyCalender>
          
            </MatchingBodyCalender>
          </MatchingBody>
        
        </MatchingContainer>
    </StyledMatching>
  );
}

export default Matching;