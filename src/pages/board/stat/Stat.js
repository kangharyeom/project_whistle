import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';

const StyledStat = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 30px 0 40px 0 ;
`;

const StatContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const StatNav = styled.div`
margin: 10px 0 10px 0;
border-bottom: 6px solid #a1c8fb;
border-right: 4px solid #a1c8fb;
border-top: 1px solid #a1c8fb;
background-color: #e1eefe;
width: 648px;
height: 140px;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const StatInfo = styled.div`
width: 500px;
justify-content: space-between;
height: 100px;
display: flex;
justify-content: center;
flex-direction: column;
`;

const StatInfoTop = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 30px;
`;

const StatInfoTopLeft = styled.div`
margin-left: 20px;
display: flex;
width: 240px;
justify-content: left;
`;
const StatInfoTopRight = styled.div`
`;

const StatInfoBottom = styled.div`
display: flex;
flex-direction: row;
`;

const StatInfoBottomLeft = styled.div`
margin-left: 20px;
width: 240px;
`;

const StatInfoBottomRight = styled.div`
`;

const TeamName = styled.div`
`;
const TeamHonorScore = styled.div`
`;
const TeamRecord = styled.div`
`;
const TeamTotalScore = styled.div`
`;

const TeamManagement = styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

const StatMyTeam = styled.div`
align-items: center;
justify-content: center;
width: 90px;
height: 90px;
`;

const Stat = () => {
    return (   
        <StyledStat id="StyledFooterId">
            <StatContainer>
                <StatNav>
                    <StatInfo id="FooterTopStatId">
                        <StatInfoTop>
                            <StatInfoTopLeft>
                                <TeamName>팀 이름</TeamName>
                            </StatInfoTopLeft>
                            <StatInfoTopRight>
                                <TeamTotalScore></TeamTotalScore>
                            </StatInfoTopRight>
                        </StatInfoTop>
                        <StatInfoBottom>
                            <StatInfoBottomLeft>
                                <TeamRecord> 전적</TeamRecord>
                            </StatInfoBottomLeft>
                            <StatInfoBottomRight>
                                <TeamHonorScore> 명예 점수</TeamHonorScore>
                            </StatInfoBottomRight>

                        </StatInfoBottom>
                    </StatInfo>

                    <TeamManagement>
                        <StatMyTeam id="StatMyTeamId" >
                            <Button sx={{ borderRadius: '50%', width: 1, height: 1 }} variant="contained" id="StatMyTeamId">팀 관리</Button>
                        </StatMyTeam>
                    </TeamManagement>
                </StatNav>
            </StatContainer>
        </StyledStat>
    );
}
  
export default Stat;