import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const StyledBoardCategory = styled.div`
  width: 100vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 4px -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const BoardCategoryContainer = styled.div`
  width: 100%;
   max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardCategoryMiddle = styled.div`
  width: 100%;
`;

const BoardCategory = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;

  const [middleValue, setMiddleValue] = useState(0);

  const MiddleHandleChange = (newValue) => {
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
    window.location.href = `${basicURL}/ranking`;
  };

  const handleClickBoard = () => {
    window.location.href = `${basicURL}/board`;
  };

  return (   
    <StyledBoardCategory id = 'StyledBoardCategory'>
      <BoardCategoryContainer id = 'BoardCategoryContainer'>
        <BoardCategoryMiddle id = 'BoardCategoryMiddle'>
          <div style={{ width: '100%' }}>
              <Tabs id = 'Tabs'
                  indicatorColor='primary'
                  value={middleValue}
                  onChange={MiddleHandleChange}
                  allowScrollButtonsMobile
                  aria-label="scrollable auto tabs example"
                  centered
              >
            <div id='tabContainer' style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Tab id='match' style={{ minWidth: '20px', flex: '1', fontSize: '12px', fontWeight: 'bold' }} onClick={handleClickMatch} label="경기" />
                <Tab id='league' style={{ minWidth: '20px', flex: '1', fontSize: '12px', fontWeight: 'bold' }} onClick={handleClickLeague} label="리그" />
                <Tab id='team' style={{ minWidth: '20px', flex: '1', fontSize: '12px', fontWeight: 'bold' }} onClick={handleClickTeams} label="팀" />
                <Tab id='ranking' style={{ minWidth: '20px', flex: '1', fontSize: '12px', fontWeight: 'bold' }} onClick={handleClickRank} label="랭킹" />
                <Tab id='board' style={{ minWidth: '20px', flex: '1', fontSize: '12px', fontWeight: 'bold' }} onClick={handleClickBoard} label="게시판" />
            </div>
              </Tabs>
          </div>
        </BoardCategoryMiddle>
      </BoardCategoryContainer>
    </StyledBoardCategory>
  );
};

export default BoardCategory;
