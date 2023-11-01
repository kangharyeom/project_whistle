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
position: fixed;
bottom: 5%;
right: -35%;
width: 100%;
max-width: 470px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const teamId = sessionStorage.getItem('teamId')
  const matchId = sessionStorage.getItem('matchId')
  const leagueId = sessionStorage.getItem('leagueId')
  
  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');

    if (authToken) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }

    setCurrentUrl(window.location.pathname);

}, []);

    let toUrl = '/'; 

    switch (currentUrl) {
        case '/match':
          toUrl = '/match-post';
          break;

        case '/team':
          toUrl = '/team-post';
          break;

        case '/league':
          toUrl = '/league-post';
          break;
        
        case '/ranking':
          toUrl = '/team-post';
          break;

        default:
          toUrl = '/';
          break;
      }

    return (   
        <StyledFooter id="StyledFooterId">
            <FooterContainer>
            {isLoggedIn && (
            <Link to={toUrl}>
                {toUrl=== '/match-post'&& matchId === 'null' && teamId !== 'null' && (
                <AddIconComponent />
                )}
                {toUrl=== '/team-post'&& teamId === 'null' && (
                <AddIconComponent />
                )}
                 {toUrl === '/league-post' && leagueId === 'null' && teamId !== 'null' && (
                <AddIconComponent />
                )}
            </Link>
            )}
            </FooterContainer>
        </StyledFooter>
    );
}
  
export default Footer;