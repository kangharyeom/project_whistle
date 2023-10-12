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

const BoardCategoryMiddle = styled.div``;

const BoardCategory = () => {
  const basicURL = 'http://localhost:3000';
   // const basicURL = 'https://dev.dovfpqk67sdce.amplifyapp.com';

  const [middleValue, setMiddleValue] = useState(0);

  const MiddleHandleChange = (event, newValue) => {
    setMiddleValue(newValue);
  };

  const handleClickMatch = () => {
    // 리그 탭을 클릭하면 basicURL/league 페이지로 이동합니다.
    window.location.href = `${basicURL}/match`;
  };

  const handleClickLeague = () => {
    window.location.href = `${basicURL}/league`;
  };

  const handleClickTeams = () => {
    window.location.href = `${basicURL}/team`;
  };

  const handleClickRank = () => {
    window.location.href = `${basicURL}/rank`;
  };

  const handleClickBoard = () => {
    window.location.href = `${basicURL}/board`;
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
            <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}}  onClick={handleClickMatch} label="경기 매칭" />
            <Tab style={{ width: '180px', fontSize: '18px', fontWeight: 'bold' }} onClick={handleClickLeague} label="리그" />
            <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}}  onClick={handleClickTeams} label="팀" />
            <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}}  onClick={handleClickRank} label="랭킹" />
            <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}}  onClick={handleClickBoard} label="자유 게시판" />
          </Tabs>
        </BoardCategoryMiddle>
      </BoardCategoryContainer>
    </StyledBoardCategory>
  );
};

export default BoardCategory;
