import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledMatchPost = styled.div`
  z-index: 9;
  margin-top: 70px;
  width: 100vw;
`;

const MatchPostSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const MatchPostBody = styled.div``;

const MatchPost = () => {
 

  return (
    <StyledMatchPost>

        <MatchPostBody>
          <MatchPostSchedule>
           
          </MatchPostSchedule>
        </MatchPostBody>
    </StyledMatchPost>
  );
};

export default MatchPost;
