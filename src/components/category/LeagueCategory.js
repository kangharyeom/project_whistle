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
  background-color: #e5f6fd;
  margin: 3% 0 0 0;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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

  const handleClickInprogress = () => {
    window.location.href = `${basicURL}/league`;
  };

  const handleClickEnd = () => {
    window.location.href = `${basicURL}/league/end`;
  };

  const handleCliclRecruit = () => {
    window.location.href = `${basicURL}/league/recruit`;
  };

  return (   
    <StyledCategory id = 'StyledCategory'>
      <CategoryContainer id = 'CategoryContainer'>
        <CategoryMiddle id = 'CategoryMiddle'>
          <ButtonGroup size="small" aria-label="small button group" sx={{width: '100%', display:'flex', justifyContent:'center'}} >
          {
          <>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickInprogress}>진행중</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickEnd}>종료 </Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleCliclRecruit}>팀 모집중</Button>
          </>
          }
          </ButtonGroup>
        </CategoryMiddle>
      </CategoryContainer>
    </StyledCategory>
  );
};

export default Category;
