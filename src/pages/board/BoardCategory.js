import React, { useState } from 'react';

import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const StyledBoardCategory = styled.div`
height: 38px;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const BoardCategoryContainer = styled.div`
position: sticky;
    top: 0;
    left: 0;
    right: 0;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const BoardCategoryMiddle = styled.div`
`;

const BoardCategory = () => {

    // 동작
    const [middleValue, setMiddleValue] = useState(0); // Initialize the active tab index

    const MiddleHandleChange = (event, newValue) => {
        // Update the active tab index when a tab is clicked
        setMiddleValue(newValue);
      };

    return (   
        <StyledBoardCategory>
            <BoardCategoryContainer>
                <BoardCategoryMiddle>
                    <Tabs 
                        indicatorColor='primary'
                        value={middleValue}
                        onChange={MiddleHandleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        aria-label="scrollable auto tabs example"
                        centered
                        >
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="경기 매칭" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="리그" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="랭킹" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="팀원 모집" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="자유 게시판" />
                    </Tabs>
                </BoardCategoryMiddle>
            </BoardCategoryContainer>
            
        </StyledBoardCategory>

);
}
  
export default BoardCategory;