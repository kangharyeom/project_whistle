import React from "react";
import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel';

const Advertisement = styled.div`
width: 100vw;
`;

const StyledSimpleSlider = styled.div`
width: 100%;
`;

const SimpleSlider = () => {
  var items = [
    {imgAddress: "/images/soccer1.jpg"},
    {imgAddress: "/images/soccer2.jpg"},
    {imgAddress: "/images/soccer3.jpg"}
  ];

  return (
    <StyledSimpleSlider id ='StyledSimpleSlider'>
      <Advertisement id ='Advertisement'>
        <div>
          <Carousel indicators={false} swipe={true} >
            {
              items.map(
                (item, i) =>
                <div style={{width: '100%', maxWidth:'470px',height:'300px'}} >
                      <img alt="Advertisement" src={item.imgAddress} style={{width: '100%', height: '100%'}} />
                  </div>
              )
            }
          </Carousel>
        </div>
    </Advertisement>
  </StyledSimpleSlider>
  );
}
export default SimpleSlider;