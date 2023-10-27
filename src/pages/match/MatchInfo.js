import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 불러옵니다.
import styled from 'styled-components';
import TeamProfile from '../team/TeamProfile';

import * as m from "../../style/match/MatchInfoStyle";
import {LevelComponent} from "../../components/info/LevelType";
import {LocationComponent} from "../../components/info/Location";
import {AgeComponent} from "../../components/info/Age";
import {RecordComponent} from "../../components/info/Record";

const MatchInfo = () => {
  const [matches, setMatches] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
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

      // 토큰이 확인 확인되면 로그인으로 간주
      if (authToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
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
                      {/* {match.homeTeamUniformType === 'NONE' && '없음'}
                      {match.homeTeamUniformType === 'RED' && "빨간색"}
                      {match.homeTeamUniformType === 'ORANGE' && "주황색" }
                      {match.homeTeamUniformType === 'YELLOW' && "노란색" }
                      {match.homeTeamUniformType === 'GREEN' && "초록색" }
                      {match.homeTeamUniformType === 'BLUE' && "파란색" }
                      {match.homeTeamUniformType === 'PURPLE' && "보라색" }
                      {match.homeTeamUniformType === 'BLACK' && "검정색" }
                      {match.homeTeamUniformType === 'WHITE' && "흰색" }
                      {match.homeTeamUniformType === 'SKY_BLUE' && "하늘색" }
                      {match.homeTeamUniformType === 'GRAY' && "회색" } */}

                      {match.homeTeamUniformType === 'NONE' && <Circle color="NONE" />}
                      {match.homeTeamUniformType === 'RED' && <Circle color="RED" />}
                      {match.homeTeamUniformType === 'ORANGE' && <Circle color="ORANGE" />}
                      {match.homeTeamUniformType === 'YELLOW' && <Circle color="YELLOW" />}
                      {match.homeTeamUniformType === 'GREEN' && <Circle color="GREEN" />}
                      {match.homeTeamUniformType === 'BLUE' && <Circle color="BLUE" />}
                      {match.homeTeamUniformType === 'PURPLE' && <Circle color="PURPLE" />}
                      {match.homeTeamUniformType === 'BLACK' && <Circle color="BLACK" />}
                      {match.homeTeamUniformType === 'WHITE' && <Circle color="WHITE" />}
                      {match.homeTeamUniformType === 'SKY_BLUE' && <Circle color="SKY_BLUE" />}
                      {match.homeTeamUniformType === 'GRAY' && <Circle color="GRAY" />}
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
                <m.BattleSuggestionButton id = 'BattleSuggestionButton'>경기 신청</m.BattleSuggestionButton>
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
          {isLoggedIn && (
            <CircularButton to="/match-post">
            <div className="plus">+</div>
          </CircularButton>
          )}
        </m.MatchCreate>
      </m.MatchScheduleContainer>
    </m.StyledMatchSchedule>
  );
};

export default MatchInfo;


const HomeTeamUniformType = styled.div`
width: 60%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
${props => props.color === 'ORANGE' && `
  ${Circle} {
    background-color: ORANGE;
  }
`}
`;

const UniformValue = styled.div`
font-size: 20px;
height: 30px;
font-weight: bold;
`;

  const Circle = styled.div`
  width: 20px;
  margin-top: 25%;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color || 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const CircularButton = styled(Link)`
  position: absolute; 
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #FF5733; /* 버튼 배경색 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* 링크 텍스트 스타일 제거 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  right: 15%; /* 화면 오른쪽에서 20px 떨어진 위치 */
  bottom: 20px; /* 화면 아래에서 20px 떨어진 위치 */
  z-index: 9999; /* 다른 컴포넌트 위에 보이도록 하는 z-index 값 */

  &:hover {
    background-color: #FF8C5A; /* 마우스 호버 시 배경색 변경 */
  }

  &:active {
    background-color: #FF3D00; /* 클릭 시 배경색 변경 */
  }

  .plus {
    font-size: 24px;
    line-height: 1;
    color: #ffffff; /* + 모양 색상 */
  }
`;