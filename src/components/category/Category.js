import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledCategory = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const CategoryContainer = styled.div`
  width: 100%;
  max-width: 470px;
  height: 100%;
  background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const CategoryMiddle = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Category = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;

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
    <StyledCategory id = 'StyledCategory'>
      <CategoryContainer id = 'CategoryContainer'>
        <CategoryMiddle id = 'CategoryMiddle'>
          <ButtonGroup size="small" aria-label="small button group" sx={{width: '100%', display:'flex', justifyContent:'center'}} >
          {
          <>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'20%'}} size="small" onClick={handleClickMatch}>경기</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'20%'}} size="small" onClick={handleClickLeague}>리그</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'20%'}} size="small" onClick={handleClickTeams}>팀</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'20%'}} size="small" onClick={handleClickRank}>랭킹</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'20%'}} size="small" onClick={handleClickBoard}>게시판</Button>
          </>
          }
          </ButtonGroup>
        </CategoryMiddle>
      </CategoryContainer>
    </StyledCategory>
  );
};

export default Category;
