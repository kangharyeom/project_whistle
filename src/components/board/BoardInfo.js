import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as l from "../../style/board/BoardInfoStyled";

import Button from '@mui/material/Button';

import {LevelComponent} from "../info/get/LevelType";
import {LocationComponent} from "../info/get/Location";
import {AgeComponent} from "../info/get/Age";



export const BoardInfoComponent = (props) => {
  const [leagues, setLeagues] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + '/api/leagues/Boardrecruit');
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

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
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

            <l.BoardInfo id='BoardInfo' key={league.leagueId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
              <l.BoardInfoRow>

                <l.BoardInfoContainer id = 'BoardInfoContainer'>
                  <l.BoardInfoLeft id = 'BoardInfoLeft'>
                    
                    <l.HomeBoardName id = 'HomeBoardName'>{league.BoardName}</l.HomeBoardName>
                      
                      <l.HomeBoardManager id = 'HomeBoardManager'> 
                      매니저 
                      <l.ManagerValue> {league.managerName} </l.ManagerValue>
                      </l.HomeBoardManager>
                    
                      <l.HomeBoardHonorScore id = 'HomeBoardHonorScore'> 점수 {league.honorScore} 점</l.HomeBoardHonorScore>
                    
                    <Button variant="outlined" size="small" sx = {{width: '60%', height: '10%'}} >
                      <Link to={`/match-detail/${league.BoardId}`}>리그 정보 </Link>
                    </Button>

                  </l.BoardInfoLeft>

                  <l.BoardInfoRight id = 'BoardInfoDiv'>
                    
                    <l.BoardInfoFirstNavAndSencondNav>
                      <l.BoardInfoFirstNav id = 'BoardInfoFirstNav'>
                          <l.MatchTime id = 'MatchTime'>
                              <p>팀 창단일 {formatDate(league.createdAt)}</p>
                          </l.MatchTime>
                      </l.BoardInfoFirstNav>
                      
                      <l.BoardInfoSecondNav id = 'BoardInfoSecondNav'>
                        {/* 지역 */}
                        <l.Location id="Location">
                          <LocationComponent locationType = {league.locationType}/> 
                        </l.Location>
                      </l.BoardInfoSecondNav>
                    </l.BoardInfoFirstNavAndSencondNav>

                    <l.BoardInfoThirdNav id = 'BoardInfoThirdNav'>
                      <l.HomeBoardLevel id = 'HomeBoardLevel'>
                        실력
                        <l.LevelValue id="LevelValue">
                          <LevelComponent levelType = {league.levelType} id ='levelTypeComponent'/>
                        </l.LevelValue>
                      </l.HomeBoardLevel>
                        
                      <l.HomeBoardAge id = 'HomeBoardAge'>
                        연령대
                        <l.AgeValue id="AgeValue">
                          <AgeComponent homeBoardAgeType = {league.ageType}/>
                        </l.AgeValue>
                      </l.HomeBoardAge>
                    </l.BoardInfoThirdNav>
                    <l.BoardInfoFourthNav>
                      <l.HomeBoardRecord id = 'HomeBoardRecord'> 
                    </l.HomeBoardRecord>
                    
                    </l.BoardInfoFourthNav>
                </l.BoardInfoRight>
              </l.BoardInfoContainer>

              </l.BoardInfoRow>
            </l.BoardInfo>
          ))}
          </l.MatchScheduleContainer>
        </l.StyledMatchSchedule>
      <l.LeagueSchedule>
        {isLoggedIn && <Link to="/league-post">글쓰기</Link>}
      </l.LeagueSchedule>
    </>
  );
};
