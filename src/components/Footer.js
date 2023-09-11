import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
width: 100vw;
height: 400px;
background-color: #252525;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const FooterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #ebfea9;
`;

const Footer = ({ isLoggedIn,handleLogin }) => {

    return (   
        <StyledFooter id="StyledFooterId">
            <FooterContainer>
                풋터
            </FooterContainer>
        </StyledFooter>
    );
}
  
export default Footer;