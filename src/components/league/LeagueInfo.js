import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as l from "../../style/league/LeagueInfoStyle";

import Button from '@mui/material/Button';

import TeamProfile from '../../pages/team/TeamProfile';
import {LevelComponent} from "../info/get/LevelType";
import {LocationComponent} from "../info/get/Location";
import {AgeComponent} from "../info/get/Age";



export const LeagueInfoComponent = (props) => {
  const [leagues, setLeagues] = useState([]);
  const {value} = props;

  useEffect(() => {
    const fetchData = async () => {
      switch (value) {
        case 0:
          console.log(value);
          try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + '/api/leagues/onseason');
            if (response.ok) {
              const jsonData = await response.json();
              console.log('온시즌');
              setLeagues(jsonData);
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
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + '/api/leagues/offseason');
            if (response.ok) {
              console.log('오프시즌');
              const jsonData = await response.json();
              setLeagues(jsonData);
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
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + '/api/leagues/teamrecruit');
            if (response.ok) {
              const jsonData = await response.json();
              console.log('팀구함');
              setLeagues(jsonData);
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

  },[value]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <>
      <l.StyledMatchSchedule id = 'StyledMatchSchedule'>
        <l.MatchScheduleContainer id = 'MatchScheduleContainer'>
          {leagues.map(league => (

            <l.TeamInfo id='TeamInfo' key={league.leagueId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
              <l.TeamInfoRow>

                <l.TeamInfoContainer id = 'TeamInfoContainer'>
                  <l.TeamInfoLeft id = 'TeamInfoLeft'>
                    <TeamProfile/>
                    
                    <l.HomeTeamName id = 'HomeTeamName'>{league.teamName}</l.HomeTeamName>
                      
                      <l.HomeTeamManager id = 'HomeTeamManager'> 
                      매니저 
                      <l.ManagerValue> {league.managerName} </l.ManagerValue>
                      </l.HomeTeamManager>
                    
                      <l.HomeTeamHonorScore id = 'HomeTeamHonorScore'> 점수 {league.honorScore} 점</l.HomeTeamHonorScore>
                    
                    <Button variant="outlined" size="small" sx = {{width: '60%', height: '10%'}} >
                      <Link to={`/match-detail/${league.teamId}`}>리그 정보 </Link>
                    </Button>

                  </l.TeamInfoLeft>

                  <l.TeamInfoRight id = 'TeamInfoDiv'>
                    
                    <l.TeamInfoFirstNavAndSencondNav>
                      <l.TeamInfoFirstNav id = 'TeamInfoFirstNav'>
                          <l.MatchTime id = 'MatchTime'>
                              <p>팀 창단일 {formatDate(league.createdAt)}</p>
                          </l.MatchTime>
                      </l.TeamInfoFirstNav>
                      
                      <l.TeamInfoSecondNav id = 'TeamInfoSecondNav'>
                        {/* 지역 */}
                        <l.Location id="Location">
                          <LocationComponent locationType = {league.locationType}/> 
                        </l.Location>
                      </l.TeamInfoSecondNav>
                    </l.TeamInfoFirstNavAndSencondNav>

                    <l.TeamInfoThirdNav id = 'TeamInfoThirdNav'>
                      <l.HomeTeamLevel id = 'HomeTeamLevel'>
                        실력
                        <l.LevelValue id="LevelValue">
                          <LevelComponent levelType = {league.levelType} id ='levelTypeComponent'/>
                        </l.LevelValue>
                      </l.HomeTeamLevel>
                        
                      <l.HomeTeamAge id = 'HomeTeamAge'>
                        연령대
                        <l.AgeValue id="AgeValue">
                          <AgeComponent homeTeamAgeType = {league.ageType}/>
                        </l.AgeValue>
                      </l.HomeTeamAge>
                    </l.TeamInfoThirdNav>
                    <l.TeamInfoFourthNav>
                      <l.HomeTeamRecord id = 'HomeTeamRecord'> 
                    </l.HomeTeamRecord>
                    
                    </l.TeamInfoFourthNav>
                </l.TeamInfoRight>
              </l.TeamInfoContainer>

              </l.TeamInfoRow>
            </l.TeamInfo>
          ))}
          </l.MatchScheduleContainer>
        </l.StyledMatchSchedule>
      <l.LeagueSchedule>
      </l.LeagueSchedule>
    </>
  );
};
