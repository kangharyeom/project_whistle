import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

const StyledTeamProfile = styled.div`
  z-index: 9;
  width: 100vw;
`;

const TeamProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamProfileBody = styled.div``;

const TeamProfileProfile = () => {
    const basicURL = process.env.REACT_APP_API_ENDPOINT;
    
    const handleClick = () => {
        window.location.href = basicURL;
    };

  return (
    <StyledTeamProfile>
      <TeamProfileContainer>
        <TeamProfileBody>
            <IconButton onClick={handleClick}>
            <img width={40} src="/images/jersey-blue.png" alt="홈팀" />
            </IconButton>
        </TeamProfileBody>
      </TeamProfileContainer>
    </StyledTeamProfile>
  );
};

export default TeamProfileProfile;
