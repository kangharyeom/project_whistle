import React from 'react';
import styled from 'styled-components';

import AdvertisementImage from './AdvertisementImage'

const StyledMatchingAdvertisement = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100vw;
`

const MatchingAdvertisement = styled.div`
margin: 30px 0 30px 0;
width: 748px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const Advertisement = () => { // 명명된 내보내기 사용
  
  return (
  <StyledMatchingAdvertisement>
        <MatchingAdvertisement>
          <AdvertisementImage/>
        </MatchingAdvertisement>
    </StyledMatchingAdvertisement>
    );
}
export default Advertisement;