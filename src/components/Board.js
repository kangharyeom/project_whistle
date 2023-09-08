import React, { useState } from 'react';

import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const StyledHeader = styled.div`
z-index: 2;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const BoardContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;
const BoardTop = styled.div`
`;
const BoardMiddle = styled.div`
`;

const Board = () => {

    // 동작
    const [topValue, setTopValue] = useState(0); // Initialize the active tab index
    const [middleValue, setMiddleValue] = useState(0); // Initialize the active tab index

    const TopHandleChange = (event, newValue) => {
        // Update the active tab index when a tab is clicked
        setTopValue(newValue);
      };
    
    const MiddleHandleChange = (event, newValue) => {
        // Update the active tab index when a tab is clicked
        setMiddleValue(newValue);
      };

    return (   
        <StyledHeader>
            <BoardContainer>
                <BoardTop>
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
                        <Tab icon={ <img src="/images/free-icon-football-5407722.png" alt="축구" width={'36px'} />} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}} label="축구" />
                        <Tab icon={ <img src="/images/free-icon-football-5407722.png" alt="풋살"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="풋살" />
                        <Tab icon={ <img src="/images/free-icon-baseball-5407447.png" alt="야구"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="야구" />
                        <Tab icon={ <img src="/images/free-icon-basketball-5407751.png" alt="농구"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="농구" />
                        <Tab icon={ <img src="/images/free-icon-volleyball-5407491.png" alt="그 외"  width={'36px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="그 외" />
                    </Tabs>
                </BoardTop>
                <BoardMiddle>
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
                </BoardMiddle>
            </BoardContainer>
            
        </StyledHeader>

);
}
  
export default Board;