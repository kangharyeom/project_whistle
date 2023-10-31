import React from 'react';
import styled from 'styled-components';

import SimpleSlider from '../components/SimpleSlider';
import Category from '../components/category/Category';

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
width: 100%;
max-width: 470px;
height: 100%;
background-color: #e5f6fd;
display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeTop = styled.div`
width: 100%;
  max-width: 470px;
display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeBody = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
width: 100%;
`;

const Home = () => {
  
  return (
    <StyledHome id="StyledHomeId">
      <HomeContainer id = 'HomeContainer'>
        <HomeTop id = 'HomeTop'>
          <SimpleSlider />
        </HomeTop>

        <HomeBody id = 'HomeBody'>
          <Category />
        </HomeBody>
      </HomeContainer>
    </StyledHome>
  );
};

export default Home;
