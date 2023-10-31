import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {AddIconComponent} from "../components/info/AddIcon";

const StyledFooter = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const FooterContainer = styled.div`
background-color: #252525;
width: 100%;
max-width: 470px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Footer = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props);

  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
}, []);

    return (   
        <StyledFooter id="StyledFooterId">
            <FooterContainer>
            {isLoggedIn && (
              <Link to="/team-post">
                <AddIconComponent />
            </Link>
            )}
            </FooterContainer>
        </StyledFooter>
    );
}
  
export default Footer;