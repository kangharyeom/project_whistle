import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import {AgeTypePostComponent} from '../../components/info/post/Age'
import {LocationTypePostComponent} from '../../components/info/post/Location'
import {FormationPostComponent} from '../../components/info/post/Formation'
import {LevelTypePostComponent} from '../../components/info/post/LevelType'
import {UniformTypePostComponent} from '../../components/info/post/UniformType'
import {FrequencyPostComponent} from '../../components/info/post/Frequency'
import {TeamNamePostComponent} from '../../components/info/post/TeamName'
// import {SportsTypePostComponent} from '../../components/info/post/SportType'

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TeamContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e5f6fd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamBody = styled.div`
   width: 100%;
  height: 100%;
  gap: 2%;
  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamPost = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;
  const userId = parseInt(sessionStorage.getItem('userId'));
  const [teamName, setTeamName] = useState('');
  const [ageType, setAgeType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [sportsType] = useState('SOCCER');
  // const [sportsType, setSportsType] = useState(''); // 기능 추가시 사용
  const [levelType, setLevelType] = useState('');
  const [formation, setFormation] = useState('');
  const [uniformType, setUniformType] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleCreateTeam = async () => {
    const authToken = sessionStorage.getItem('authToken');  
    console.log('authToken:'+ authToken)
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken 
        },
        body: JSON.stringify(
          {
          userId: userId,
          teamName: teamName,
          ageType: ageType,
          locationType: locationType,
          sportsType: sportsType,
          levelType: levelType,
          formation: formation,
          uniformType: uniformType,
          frequency: frequency
        })
      });
      if (response.ok) {
        const responseData = await response.json();
        const teamId = responseData.teamId;
        sessionStorage.setItem('teamId', teamId);
        console.log('팀 생성 성공');
        alert('팀 생성 성공')
        window.location.href = basicURL+'/team'
      } else {
        console.error('팀 생성 실패');
        alert('팀 생성 실패')
        window.location.href = basicURL+'/team-post'
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      alert('에러 발생')
      window.location.href = basicURL+'/team-post'
    }
  };

  return (
    <StyledTeam id = 'StyledTeam'>
      <TeamContainer id = 'TeamContainer'>

        <TeamBody id = 'TeamBody'>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  
            <FormControl fullWidth>
                팀이름
                <TeamNamePostComponent teamName={teamName} setTeamName={setTeamName}/>
            </FormControl>
            <FormControl fullWidth>
                연령대
                <AgeTypePostComponent ageType={ageType} setAgeType={setAgeType} />
            </FormControl>
            <FormControl fullWidth>
                지역
                <LocationTypePostComponent locationType={locationType} setLocationType={setLocationType} />
            </FormControl>
            <FormControl fullWidth>
                팀 실력
                <LevelTypePostComponent levelType={levelType} setLevelType={setLevelType}/>
            </FormControl>
            <FormControl fullWidth>
                팀 포메이션
                <FormationPostComponent formation={formation} setFormation={setFormation} />
            </FormControl>
            <FormControl fullWidth>
                유니폼 색상
                <UniformTypePostComponent uniformType={uniformType} setUniformType={setUniformType} />
            </FormControl>
            <FormControl fullWidth>
                팀 활동 빈도
                <FrequencyPostComponent frequency={frequency} setFrequency={setFrequency} />
            </FormControl>
                {/* 운동 유형 */}
                {/* <SportsTypePostComponent sportsType={sportsType} setSportsType={setSportsType}/> */}
          <Button sx={{width:'50%', marginTop: '8%'}}variant="contained" size="small" type="submit" onClick={handleCreateTeam}> 회원가입 </Button>
          </Box>
        </TeamBody>
      </TeamContainer>
    </StyledTeam>
  );
};

export default TeamPost;