import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import Button from '@mui/material/Button';

import TeamProfile from '../../pages/team/TeamProfile';
import {LevelComponent} from "../info/get/LevelType";
import {LocationComponent} from "../info/get/Location";
import {AgeComponent} from "../info/get/Age";
import {RecordComponent} from "../info/get/Record";
import {UniformTypeComponent} from "../info/get/UniformType";

import * as t from "../../style/match/MatchFindRivalStyle";

export const TeamInfoComponent = (props) => {
    const [teams, setTeames] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const {value} = props;

  useEffect(() => {
    const fetchData = async () => {
      switch (value) {
        case 0:
          console.log(value);
          try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/teams?page=1&size=40');
            if (response.ok) {
              const jsonData = await response.json();
              setTeames(jsonData.data);
              setPageInfo(jsonData.pageInfo);
            } else {
              console.error('데이터를 가져오는 데 실패했습니다.');
            }
          } catch (error) {
            console.error('에러 발생:', error);
          }
          break;
        
        case 1:
          console.log(value);
          try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/teams/honor/high');
            if (response.ok) {
              const jsonData = await response.json();
              setTeames(jsonData);
            } else {
              console.error('데이터를 가져오는 데 실패했습니다.');
            }
          } catch (error) {
            console.error('에러 발생:', error);
          }
          break;

        case 2:
          console.log(value);
          try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/teams/honor/low');
            if (response.ok) {
              const jsonData = await response.json();
              setTeames(jsonData);
            } else {
              console.error('데이터를 가져오는 데 실패했습니다.');
            }
          } catch (error) {
            console.error('에러 발생:', error);
          }
          break;

          default:
          console.error('잘못된 값:', value);
      }
          
    };

    fetchData();
   
  }, [value]); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정합니다.


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <>
      <t.StyledMatchSchedule id = 'StyledMatchSchedule'>
        <t.MatchScheduleContainer id = 'MatchScheduleContainer'>
          {teams.map(team => (
            <t.TeamInfo id='TeamInfo' key={team.teamId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/match-detail/${team.teamId}`}>
                </Link>
              <t.TeamInfoRow>
                <t.TeamInfoContainer id = 'TeamInfoContainer'>
              
                <t.TeamInfoLeft id = 'TeamInfoLeft'>
                  <TeamProfile/>
                  <t.HomeTeamName id = 'HomeTeamName'>{team.teamName}</t.HomeTeamName>
                    <t.HomeTeamManager id = 'HomeTeamManager'>
                      매니저 
                      <t.ManagerValue>
                        {team.managerName}
                      </t.ManagerValue>
                    </t.HomeTeamManager>
                  <t.HomeTeamHonorScore id = 'HomeTeamHonorScore'> 점수 {team.honorScore} 점</t.HomeTeamHonorScore>
                  
                  <Button variant="outlined" size="small" sx = {{width: '60%', height: '10%'}} >
                    <Link to={`/match-detail/${team.teamId}`}>팀 정보 </Link>
                  </Button>
                </t.TeamInfoLeft>

                <t.TeamInfoRight id = 'TeamInfoDiv'>
                  <t.TeamInfoFirstNavAndSencondNav>
                    <t.TeamInfoFirstNav id = 'TeamInfoFirstNav'>
                        <t.MatchTime id = 'MatchTime'>
                            <p>팀 창단일 {formatDate(team.createdAt)}</p>
                        </t.MatchTime>
                    </t.TeamInfoFirstNav>
                    <t.TeamInfoSecondNav id = 'TeamInfoSecondNav'>
                      {/* 지역 */}
                      <t.Location id="Location">
                      <LocationComponent locationType = {team.locationType}/> 
                      </t.Location>
                    </t.TeamInfoSecondNav>
                  </t.TeamInfoFirstNavAndSencondNav>
                  <t.TeamInfoThirdNav id = 'TeamInfoThirdNav'>
                    <t.HomeTeamLevel id = 'HomeTeamLevel'>
                      실력
                      <t.LevelValue id="LevelValue">
                        <LevelComponent levelType = {team.levelType} id ='levelTypeComponent'/>
                      </t.LevelValue>
                    </t.HomeTeamLevel>
                    <HomeTeamUniformType id = 'uniformType' color={team.uniformType}>
                      유니폼
                      <UniformValue>
                        <UniformTypeComponent id = 'uniformType' uniformType = {team.uniformType} />
                      </UniformValue>
                    </HomeTeamUniformType>
                      
                    <t.HomeTeamAge id = 'HomeTeamAge'>
                      연령대
                      <t.AgeValue id="AgeValue">
                        <AgeComponent homeTeamAgeType = {team.ageType}/>
                      </t.AgeValue>
                    </t.HomeTeamAge>
                  </t.TeamInfoThirdNav>
                  <t.TeamInfoFourthNav>
                    전적
                    <t.HomeTeamRecord id = 'HomeTeamRecord'> 
                    <RecordComponent winRecord={team.totalWinRecord}
                      drawRecord={team.totalDrawRecord}
                      loseRecord={team.totalLoseRecord}
                    />
                  </t.HomeTeamRecord>
                  
                  </t.TeamInfoFourthNav>
                </t.TeamInfoRight>
              </t.TeamInfoContainer>
              </t.TeamInfoRow>
            </t.TeamInfo>
          ))}
          <t.PageInfo>
            <p>현재 페이지: {pageInfo.page}</p>
            <p>전체 페이지 수: {pageInfo.totalPages}</p>
          </t.PageInfo>
          <t.MatchCreate id = 'MatchCreate'>
          
          </t.MatchCreate>
        </t.MatchScheduleContainer>
      </t.StyledMatchSchedule>
    </>
  );
};


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