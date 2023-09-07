// ./pages/Home.js
import React from 'react';
import styled from 'styled-components';

import "react-day-picker/dist/style.css";

const StyledMatching = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchingContainer = styled.div`
width: 948px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingTop = styled.div`
background-color: #F0FFFF;
width: 100vw;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingTopAdvertisement = styled.div`
margin: 30px 0 30px 0;
background-color: #bada55;
width: 848px;
height: 420px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const MatchingBody = styled.div`
width: 948px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
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

export const Matching = () => { // 명명된 내보내기 사용

  return <StyledMatching>
    <MatchingContainer>
      <MatchingTop>
        <MatchingTopAdvertisement>
          <div>광고부분입니다.</div>
        </MatchingTopAdvertisement>
      </MatchingTop>
      <MatchingBody>
      <MatchingBodyCalender>
     
      </MatchingBodyCalender>
      </MatchingBody>
    </MatchingContainer>
    </StyledMatching>
};
