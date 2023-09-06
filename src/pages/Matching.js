// ./pages/Home.js
import React from 'react';
import styled from 'styled-components';

const StyledMatching = styled.div`
width: 100vw;
background-color: #309ea6;
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchingContainer = styled.div`
width: 768px;
background-color: #bada55;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingTop = styled.div`
width: 768px;
height: 300px;
background-color: #bada55;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingBody = styled.div`
width: 768px;
background-color: #768ff3;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingBodyCalender = styled.div`
width: 768px;
background-color: #f3d276;
height: 100px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;
export const Matching = () => { // 명명된 내보내기 사용
  return <StyledMatching>
    <MatchingContainer>
      <MatchingTop>
        <div>광고부분입니다.</div>
      </MatchingTop>
      <MatchingBody>
      <MatchingBodyCalender>
      <div>달력입니다.</div>

      </MatchingBodyCalender>

      </MatchingBody>
    </MatchingContainer>
    </StyledMatching>
};
