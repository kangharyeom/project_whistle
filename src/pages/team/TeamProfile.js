import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

const StyledTeamProfile = styled.div``;
const TeamProfileContainer = styled.div``;
const TeamProfileBody = styled.div``;

const CustomIconButton = styled(IconButton)`
  border: 2px solid white;
`;

const TeamProfileProfile = () => {
    const basicURL = process.env.REACT_APP_API_ENDPOINT;
    
    const handleClick = () => {
        window.location.href = basicURL;
    };

  return (
    <StyledTeamProfile>
      <TeamProfileContainer>
        <TeamProfileBody>
            <CustomIconButton  onClick={handleClick}>
                <img width={40} src="/images/jersey-blue.png" alt="홈팀" />
            </CustomIconButton>
        </TeamProfileBody>
      </TeamProfileContainer>
    </StyledTeamProfile>
  );
};

export default TeamProfileProfile;
