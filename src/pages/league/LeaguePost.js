import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import {LevelTypePostComponent} from '../../components/info/post/LevelType'
import {FrequencyPostComponent} from '../../components/info/post/Frequency'
import {LeagueNamePostComponent} from '../../components/info/post/LeagueName'
import {AgeTypePostComponent} from '../../components/info/post/Age'
import {LocationTypePostComponent} from '../../components/info/post/Location'
import {MatchCountPostComponent} from '../../components/info/post/MatchCount'
import {LeaguePeriodPostComponent} from '../../components/info/post/LeguePeriod'
// import {UniformTypePostComponent} from '../../components/info/post/UniformType'
// import {FormationPostComponent} from '../../components/info/post/Formation'

const StyledLeaguePost = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaguePostContainer = styled.div`
  margin-top: 30px;
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaguePostBody = styled.div`
 width: 470px;
 display: flex;
 place-items: center;
 flex-direction: column;
 align-items: center;
`;

const LeaguePost = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;
  const userId = parseInt(sessionStorage.getItem('userId'));
  const teamId = parseInt(sessionStorage.getItem('teamId'));
  const [leagueName, setLeagueName] = useState('');
  const [ageType, setAgeType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [sportsType] = useState('SOCCER');
  // const [sportsType, setSportsType] = useState(''); // 기능 추가시 사용
  const [levelType, setLevelType] = useState('');
  const [period, setPeriod] = useState('');
  const [matchCount, setMatchCount] = useState('');
  const [frequency, setFrequency] = useState('');
  
  const handleCreateLeague = async () => {
    const authToken = sessionStorage.getItem('authToken'); 

    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/leagues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken 
        },
        body: JSON.stringify(
          {
          userId: userId,
          teamId: teamId,
          leagueName: leagueName,
          ageType: ageType,
          locationType: locationType,
          sportsType: sportsType,
          levelType: levelType,
          period: period,
          frequency: frequency,
          matchCount: matchCount
        })
      });
      if (response.ok) {
        const responseData = await response.json(); 
        const leagueId = responseData.leagueId; 
        sessionStorage.setItem('leagueId', leagueId); 
        console.log('leagueId :'+localStorage.getItem('leagueId'));
        console.log('리그 생성 성공');
        alert('리그 생성 성공')
        window.location.href = basicURL+'/league'
      } else {
        console.error('리그 생성 실패');
        alert('리그 생성 실패')
        window.location.href = basicURL+'/league-post'
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      alert('에러 발생')
      window.location.href = basicURL+'/league-post'
    }
  };

  return (
    <StyledLeaguePost>
      <LeaguePostContainer>
        <LeaguePostBody>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">  
            <FormControl fullWidth>
            리그 이름
            <LeagueNamePostComponent leagueName={leagueName} setLeagueName={setLeagueName}/>
            연령대
            <AgeTypePostComponent ageType={ageType} setAgeType={setAgeType} />
            지역
            <LocationTypePostComponent locationType={locationType} setLocationType={setLocationType} />
            팀 실력
            <LevelTypePostComponent levelType={levelType} setLevelType={setLevelType}/>
            팀 활동 빈도
            <FrequencyPostComponent frequency={frequency} setFrequency={setFrequency} />
            경기 수
            <MatchCountPostComponent matchCount={matchCount} setMatchCount={setMatchCount}/>
            리그 기간
            <LeaguePeriodPostComponent period={period} setPeriod={setPeriod}/>
            <Button sx={{width:'50%', marginTop: '8%'}}variant="contained" size="small" type="submit" onClick={handleCreateLeague}>팀 생성</Button>
          </FormControl>
          </Box>
        </LeaguePostBody>

      </LeaguePostContainer>
    </StyledLeaguePost>
  );
};

export default LeaguePost;