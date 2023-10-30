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
  background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

const CategoryMiddle = styled.div`
  width: 100%;
  margin: 3% 0 0 0;
  max-width: 470px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const MatchCategory = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;

  const handleClickTeamInfo = () => {
    // 리그 탭을 클릭하면 basicURL/league 페이지로 이동합니다.
    window.location.href = `${basicURL}/team`;
  };

  const handleClickRecruit = () => {
    window.location.href = `${basicURL}/team/recruit`;
  };

  return (   
    <StyledCategory id = 'StyledCategory'>
      <CategoryContainer id = 'CategoryContainer'>
        <CategoryMiddle id = 'CategoryMiddle'>
          <ButtonGroup size="small" aria-label="small button group" sx={{width: '100%', height: '30px', display:'flex', justifyContent:'center'}} >
          {
          <>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickTeamInfo}>팀 정보</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#064452",  fontWeight: "bold",  fontSize: "14px", width:'30%'}} size="small" onClick={handleClickRecruit}>용병 모집</Button>
          </>
          }
          </ButtonGroup>
        </CategoryMiddle>
      </CategoryContainer>
    </StyledCategory>
  );
};

export default MatchCategory;
