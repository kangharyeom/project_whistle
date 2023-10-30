import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledBoardCategory = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const BoardCategoryContainer = styled.div`
  width: 100%;
  background-color: #e5f6fd;
  margin: 3% 0 0 0;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const BoardCategoryMiddle = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const BoardCategory = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;

  const handleClickBoard = () => {
    // 리그 탭을 클릭하면 basicURL/league 페이지로 이동합니다.
    window.location.href = `${basicURL}/match`;
  };

  const handleClickSoccer = () => {
    window.location.href = `${basicURL}/league`;
  };

  const handleClickBascketBall = () => {
    window.location.href = `${basicURL}/team`;
  };

  const handleClickBaseBall = () => {
    window.location.href = `${basicURL}/ranking`;
  };

  const handleClickFootBaseBall = () => {
    window.location.href = `${basicURL}/board`;
  };

  return (    
    <StyledBoardCategory id = 'StyledBoardCategory'>
      <BoardCategoryContainer id = 'BoardCategoryContainer'>
        <BoardCategoryMiddle id = 'BoardCategoryMiddle'>
          <ButtonGroup size="small" aria-label="small button group" sx={{width: '100%', display:'flex', justifyContent:'center'}} >
          {
          <>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickBoard}>자유게시판</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickSoccer}>축구</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickBascketBall}>농구</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickBaseBall}>야구</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickFootBaseBall}>발야구</Button>
          </>
          }
          </ButtonGroup>
        </BoardCategoryMiddle>
      </BoardCategoryContainer>
    </StyledBoardCategory>
  );
};

export default BoardCategory;
