import React from 'react';
import styled from 'styled-components';

import Stat from './FooterComponents/FooterStat'


const StyledFooter = styled.div`
width: 100vw;
background-color: #f2f2f2;
display: flex;
flex-direction: column;
align-items: center;
`;


const FooterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

background-color: #ebfea9;
`;

const FooterTop = styled.div`
background-color: #fec6a9;
width: 100vw;
justify-content: space-between;
display: flex;
flex-direction: column;
`;

const FooterBottom = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 300px;
background-color: #252525;
`;


const Footer = ({ isLoggedIn,handleLogin }) => {

    return (   
        <StyledFooter id="StyledFooterId">
            <FooterContainer>
                <FooterTop>
                    <Stat />
                </FooterTop>
            
                <FooterBottom id="FooterBottomId">
                   바텀
                </FooterBottom>
            </FooterContainer>
        </StyledFooter>
    );
}
  
export default Footer;