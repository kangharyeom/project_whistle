import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';

const StyledStat = styled.div`
width: 100vw;
background-color: #F0FFFF;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StatContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const StatNav = styled.div`
margin: 10px 0 10px 0;
border: 4px solid #E8F3FF;
background-color: #C4E0FF;
width: 748px;
height: 180px;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const StatLeft = styled.div`
background-color: #E8FFF7;
border-radius: 20px;
width: 500px;
justify-content: space-between;
height: 140px;
display: flex;
align-items: center;
flex-direction: row;
`;

const StatRight = styled.div`
width: 200px;
height: 140px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const StatMyTeam = styled.div`
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 90px;
background-color: #b3fdc8;
`;

const Stat = () => {
    return (   
        <StyledStat id="StyledFooterId">
            <StatContainer>
                <StatNav>
                    <StatLeft id="FooterTopStatId">소속팀&스탯</StatLeft>

                    <StatRight>
                        <StatMyTeam id="StatMyTeamId" >
                            <Button sx={{ borderRadius: '50%', width: 1, height: 1 }} variant="contained" id="StatMyTeamId">팀 관리</Button>
                        </StatMyTeam>
                    </StatRight>
                </StatNav>
            </StatContainer>
        </StyledStat>
    );
}
  
export default Stat;