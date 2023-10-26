import React from 'react';

import Button from '@mui/material/Button';

import * as s from '../style/StatStyle'

const Stat = () => {
    return (   
        <s.StyledStat id="StyledFooterId">
            <s.StatContainer>
                <s.StatNav>
                    <s.StatInfo id="FooterTopStatId">
                        <s.StatInfoTop>
                            <s.StatInfoTopLeft>
                                <s.TeamName>팀 이름</s.TeamName>
                            </s.StatInfoTopLeft>
                            <s.StatInfoTopRight>
                                <s.TeamTotalScore></s.TeamTotalScore>
                            </s.StatInfoTopRight>
                        </s.StatInfoTop>
                        <s.StatInfoBottom>
                            <s.StatInfoBottomLeft>
                                <s.TeamRecord> 전적</s.TeamRecord>
                            </s.StatInfoBottomLeft>
                            <s.StatInfoBottomRight>
                                <s.TeamHonorScore> 명예 점수</s.TeamHonorScore>
                            </s.StatInfoBottomRight>

                        </s.StatInfoBottom>
                    </s.StatInfo>

                    <s.TeamManagement>
                        <s.StatMyTeam id="StatMyTeamId" >
                            <Button sx={{ borderRadius: '50%', width: 1, height: 1 }} variant="contained" id="StatMyTeamId">팀 관리</Button>
                        </s.StatMyTeam>
                    </s.TeamManagement>
                </s.StatNav>
            </s.StatContainer>
        </s.StyledStat>
    );
}
  
export default Stat;