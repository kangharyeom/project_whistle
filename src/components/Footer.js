import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';

const StyledFooter = styled.div`
width: 100vw;
height: 540px;
background-color: #f2f2f2;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const FooterTopContainerDiv = styled.div`
width: 768px;
height: 140px;
background-color: #d1c6c6;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const FooterTopContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background-color: #ebfea9;
`;

const FooterTop = styled.div`
background-color: #fec6a9;
width: 728px;
justify-content: space-between;
height: 100px;
display: flex;
flex-direction: row;
`;

const FooterTopStat = styled.div`
width: 200px;
height: 80px;
`;

const FooterTopTeamTalkAndTeamManagement = styled.div`
width: 300px;
background-color: #a9d2fe;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;


const FooterTopTeamTalk = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
width: 90px;
height: 90px;
background-color: #b3fdc8;
`;

const FooterTopTeamManagement = styled.div`
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
width: 90px;
height: 90px;
background-color: #b3fdc8;
`;


const FooterBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 400px;
background-color: black;
`;


const Footer = () => {
    return (   
        <StyledFooter id="StyledFooterId">
            <FooterTopContainerDiv id="FooterContainerId">
                <FooterTopContainer>
                    <FooterTop id="FooterTopId">
                            <FooterTopStat id="FooterTopStatId">소속팀&스탯</FooterTopStat>

                            <FooterTopTeamTalkAndTeamManagement>
                                <FooterTopTeamTalk id="FooterTopTeamTalkId">
                                    <Button sx={{ borderRadius: '50%', width: 1, height: 1 }} variant="contained" id="TeamTalkId">팀톡</Button>
                                </FooterTopTeamTalk>
                                <FooterTopTeamManagement id="FooterTopTeamManagementId" >팀 관리</FooterTopTeamManagement>
                            </FooterTopTeamTalkAndTeamManagement>
                    </FooterTop>
                </FooterTopContainer>
            </FooterTopContainerDiv>
            <FooterBottom id="FooterBottomId">

            </FooterBottom>
           
        </StyledFooter>
    );
}
  
export default Footer;