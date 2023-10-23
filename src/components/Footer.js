import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const FooterContainer = styled.div`
background-color: #252525;
width: 470px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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