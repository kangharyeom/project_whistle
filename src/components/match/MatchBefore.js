import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 불러옵니다.
import styled from 'styled-components';
import TeamProfile from '../../pages/team/TeamProfile';

import Button from '@mui/material/Button';

import * as m from "../../style/match/MatchFindRivalStyle";
import {LevelComponent} from "../info/get/LevelType";
import {LocationComponent} from "../info/get/Location";
import {AgeComponent} from "../info/get/Age";
import {RecordComponent} from "../info/get/Record";
import {UniformTypeComponent} from "../info/get/UniformType";

const MatchBeforeComponent = () => {
  const [matches, setMatches] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/matches?page=1&size=40');
        if (response.ok) {
          const jsonData = await response.json();
          setMatches(jsonData.data);
          setPageInfo(jsonData.pageInfo);
        } else {
          console.error('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <m.StyledMatchSchedule id = 'StyledMatchSchedule'>
      <m.MatchScheduleContainer id = 'MatchScheduleContainer'>
        {matches.map(match => (
          <m.TeamInfo id='TeamInfo' key={match.matchId}>
              {/* 각 매치 ID에 대한 링크를 생성합니다. */}
              <Link to={`/match-detail/${match.matchId}`}>
              </Link>
            <m.TeamInfoRow>
              <m.TeamInfoContainer id = 'TeamInfoContainer'>
             
              <m.TeamInfoLeft id = 'TeamInfoLeft'>
                <TeamProfile/>
                <m.HomeTeamName id = 'HomeTeamName'>{match.homeTeamName}</m.HomeTeamName>
                  <m.HomeTeamManager id = 'HomeTeamManager'>매니저 
                    <m.ManagerValue>
                      {match.homeTeamManagerName}
                    </m.ManagerValue>
                  </m.HomeTeamManager>
                <m.HomeTeamHonorScore id = 'HomeTeamHonorScore'> 점수 {match.homeTeamHonorScore} 점</m.HomeTeamHonorScore>
              </m.TeamInfoLeft>

              <m.TeamInfoRight id = 'TeamInfoDiv'>
                <m.TeamInfoFirstNavAndSencondNav>
                  <m.TeamInfoFirstNav id = 'TeamInfoFirstNav'>
                      <m.MatchTime id = 'MatchTime'>
                          <p>{formatDate(match.matchDate)} {match.matchTime}</p>
                      </m.MatchTime>
                  </m.TeamInfoFirstNav>
                  <m.TeamInfoSecondNav id = 'TeamInfoSecondNav'>
                    {/* 지역 */}
                    <m.Location id="Location">
                    <LocationComponent locationType = {match.locationType}/> 
                    </m.Location>
                  </m.TeamInfoSecondNav>
                </m.TeamInfoFirstNavAndSencondNav>
                <m.TeamInfoThirdNav id = 'TeamInfoThirdNav'>
                  <m.HomeTeamLevel id = 'HomeTeamLevel'>
                    실력
                    <m.LevelValue id="LevelValue">
                      <LevelComponent levelType = {match.homeTeamLevelType} id ='HomeTeamLevelComponent'/>
                    </m.LevelValue>
                  </m.HomeTeamLevel>
                  <HomeTeamUniformType id = 'HomeTeamUniformType' color={match.homeTeamUniformType}>
                    유니폼
                    <UniformValue>
                      <UniformTypeComponent id = 'HomeTeamUniformType' uniformType = {match.homeTeamUniformType} />
                    </UniformValue>
                  </HomeTeamUniformType>
                    
                  <m.HomeTeamAge id = 'HomeTeamAge'>
                    연령대
                    <m.AgeValue id="AgeValue">
                      <AgeComponent homeTeamAgeType = {match.homeTeamAgeType}/>
                    </m.AgeValue>
                  </m.HomeTeamAge>
                </m.TeamInfoThirdNav>
                <m.TeamInfoFourthNav>
                  전적
                  <m.HomeTeamRecord id = 'HomeTeamRecord'> 
                  <RecordComponent winRecord={match.homeTeamTotalWinRecord}
                    drawRecord={match.homeTeamTotalDrawRecord}
                    loseRecord={match.homeTeamTotalLoseRecord}
                  />
                </m.HomeTeamRecord>
                <Button variant="outlined" size="small" sx = {{width: '60%', height: '30%'}} >경기 신청</Button>
                </m.TeamInfoFourthNav>
              </m.TeamInfoRight>
            </m.TeamInfoContainer>
            </m.TeamInfoRow>
          </m.TeamInfo>
        ))}
        <m.PageInfo>
          <p>현재 페이지: {pageInfo.page}</p>
          <p>전체 페이지 수: {pageInfo.totalPages}</p>
        </m.PageInfo>
        <m.MatchCreate id = 'MatchCreate'>
         
        </m.MatchCreate>
      </m.MatchScheduleContainer>
    </m.StyledMatchSchedule>
  );
};

export default MatchBeforeComponent;

const HomeTeamUniformType = styled.div`
width: 60%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UniformValue = styled.div`
font-size: 20px;
height: 30px;
font-weight: bold;
`;
