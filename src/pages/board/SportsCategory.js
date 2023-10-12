import React, { useState } from 'react';

import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const StyledSportsCategory = styled.div`
width: 100vw;
height: 40px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const SportsCategoryContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;
const SportsCategoryTop = styled.div`
`;
const SportsCategory = () => {

    // 동작
    const [topValue, setTopValue] = useState(0); // Initialize the active tab index

    const TopHandleChange = (event, newValue) => {
        // Update the active tab index when a tab is clicked
        setTopValue(newValue);
      };
    
    return (   
        <StyledSportsCategory>
            <SportsCategoryContainer>
                <SportsCategoryTop>
                    <Tabs
                        value={topValue}
                        onChange={TopHandleChange}
                        showThumbs={false}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                        centered
                    >
                        <Tab icon={ <img src="/images/pictogram-icon-football.png" alt="축구" width={'36px'} />} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}} label="축구" />
                        <Tab icon={ <img src="/images/pictogram-icon-football.png" alt="풋살"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="풋살" />
                        {/* <Tab icon={ <img src="/images/pictogram-icon-baseball.png" alt="야구"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="야구" />
                        <Tab icon={ <img src="/images/pictogram-icon-basketball.png" alt="농구"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="농구" />
                        <Tab icon={ <img src="/images/pictogram-icon-volleyball.png" alt="그 외"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="그 외" /> */}
                    </Tabs>
                </SportsCategoryTop>
            </SportsCategoryContainer>
            
        </StyledSportsCategory>

);
}
  
export default SportsCategory;