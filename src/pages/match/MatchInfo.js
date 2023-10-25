import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 불러옵니다.
import styled from 'styled-components';
import TeamProfile from '../team/TeamProfile';

const StyledMatchSchedule = styled.div`
  width: 100%;
`;

const MatchScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TeamInfo = styled.div`
border-bottom: 8px solid #d3d4d6;
border-top: 1px solid #d3d4d6;
border-left: 1px solid #d3d4d6;
border-right: 6px solid #d3d4d6;
background-color: #cae7ff;
border-radius: 10px;
width: 440px;
height: 180px;
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TeamInfoContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TeamInfoLeft = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

  const HomeTeamName = styled.div``;
  const HomeTeamHonorScore = styled.div``;
  const HomeTeamRecord = styled.div``;
  const HomeTeamManager = styled.div``;

  const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color || 'transparent'};
  `;
  const HomeTeamUniformType = styled.div`
  ${props => props.color === 'ORANGE' && `
    ${Circle} {
      background-color: ORANGE;
    }
  `}
  `;

const TeamInfoDiv = styled.div`
height: 100%;
width: 240px;
display: flex;
flex-direction: column;
`;

const TeamInfoFirstNav = styled.nav`
height: 100%;
width: 240px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const TeamInfoSecondNav = styled.nav`
height: 100%;
width: 240px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const TeamInfoThirdNav = styled.nav`
height: 100%;
width: 240px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const MatchTime = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Location = styled.div``;
const HomeTeamAge = styled.div``;
const HomeTeamLevel = styled.div``;
const MatchRule = styled.div``;

  const BattleSuggestionButton = styled.div``;

const MatchCreate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 470px;
`;

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
    <StyledMatchSchedule id = 'StyledMatchSchedule'>
      <MatchScheduleContainer id = 'MatchScheduleContainer'>
        {matches.map(match => (
          <TeamInfo id='TeamInfo' key={match.matchId}>
              {/* 각 매치 ID에 대한 링크를 생성합니다. */}
              <Link to={`/match-detail/${match.matchId}`}>
              </Link>
              <TeamInfoContainer id = 'TeamInfoContainer'>
           
             
              <TeamInfoLeft id = 'TeamInfoLeft'>
                <TeamProfile/>
                <HomeTeamName>{match.homeTeamName}</HomeTeamName>
                  <HomeTeamManager>매니저: {match.homeTeamManagerName}</HomeTeamManager>
                <HomeTeamHonorScore> 명예점수 {match.homeTeamHonorScore} 점</HomeTeamHonorScore>
                <HomeTeamRecord> 
                  {match.homeTeamTotalWinRecord+
                  match.homeTeamTotalDrawRecord+
                  match.homeTeamTotalLoseRecord}전 
                  {match.homeTeamTotalWinRecord}승 
                  {match.homeTeamTotalDrawRecord}무 
                  {match.homeTeamTotalLoseRecord}패
                </HomeTeamRecord>
                
              </TeamInfoLeft>
              <TeamInfoDiv id = 'TeamInfoDiv'>
                <TeamInfoFirstNav id = 'TeamInfoFirstNav'>
                  <MatchTime>
                      <p>{formatDate(match.matchDate)} {match.matchTime}</p>
                  </MatchTime>

                  <Location>
                      {match.locationType === 'SEOUL' && '서울'}
                      {match.locationType === 'INCHEON' && '인천'}
                      {match.locationType === 'DAEGU' && '대구'}
                      {match.locationType === 'BUSAN' && '부산'}
                      {match.locationType === 'GWANGJU' && '광주'}
                      {match.locationType === 'DAEJEON' && '대전'}
                      {match.locationType === 'GYEONGGI' && '경기도'}
                      {match.locationType === 'JEJU' && '제주'}
                      {match.locationType === 'ULSAN' && '울산'}
                      {match.locationType === 'CHUNGCHEONGNAM' && '충청남도'}
                      {match.locationType === 'CHUNGCHEONGBUK' && '충청북도'}
                      {match.locationType === 'GYEONGSANGBUK' && '경상북도'}
                      {match.locationType === 'GYEONGSANGNAM' && '경상남도'}
                      {match.locationType === 'JEOLLABUK' && '전라북도'}
                      {match.locationType === 'JEOLLANAM' && '전라남도'}
                      {match.locationType === 'GANGWON' && '강원도'}
                    </Location>
                </TeamInfoFirstNav>

                <TeamInfoSecondNav id = 'TeamInfoSecondNav'>
                  <HomeTeamLevel>
                  {match.homeTeamLevelType === 'LOWEST' && '최하'}
                  {match.homeTeamLevelType === 'LOWER' && '하'}
                  {match.homeTeamLevelType === 'MIDDLE' && '중'}
                  {match.homeTeamLevelType === 'UPPER' && '상'}
                  {match.homeTeamLevelType === 'HIGHEST' && '최상'}
                  </HomeTeamLevel>
                  <HomeTeamUniformType color={match.homeTeamUniformType}>
                    유니폼:
                  {match.homeTeamUniformType === 'NONE' && '없음'}
                  {match.homeTeamUniformType === 'RED' && "빨간색"}
                  {match.homeTeamUniformType === 'ORANGE' && "주황색" }
                  {match.homeTeamUniformType === 'YELLOW' && "노란색" }
                  {match.homeTeamUniformType === 'GREEN' && "초록색" }
                  {match.homeTeamUniformType === 'BLUE' && "파란색" }
                  {match.homeTeamUniformType === 'PURPLE' && "보라색" }
                  {match.homeTeamUniformType === 'BLACK' && "검정색" }
                  {match.homeTeamUniformType === 'WHITE' && "흰색" }
                  {match.homeTeamUniformType === 'SKY_BLUE' && "하늘색" }
                  {match.homeTeamUniformType === 'GRAY' && "회색" }

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
                </HomeTeamUniformType>
                    
                    <HomeTeamAge>
                      {match.homeTeamAgeType === 'TEENAGER' && '10대'}
                      {match.homeTeamAgeType === 'UNIVERSITY_STUDENT' && '대학생'}
                      {match.homeTeamAgeType === 'TWENTIES' && '20대'}
                      {match.homeTeamAgeType === 'OFFICE_WORKER' && '회사원'}
                      {match.homeTeamAgeType === 'EARLY_SOCCER' && '조기축구회'}
                      {match.homeTeamAgeType === 'THIRTIETH' && '30대'}
                      {match.homeTeamAgeType === 'FORTIES' && '40대'}
                      {match.homeTeamAgeType === 'FIFTIES' && '50대'}
                    </HomeTeamAge>
                </TeamInfoSecondNav>
              <TeamInfoThirdNav id = 'TeamInfoThirdNav'>
                    <MatchRule>경기 규칙: {match.matchRules}</MatchRule>
                    <BattleSuggestionButton>대결 신청</BattleSuggestionButton>
                </TeamInfoThirdNav>

              </TeamInfoDiv>
            </TeamInfoContainer>
          </TeamInfo>
        ))}
        <PageInfo>
          <p>현재 페이지: {pageInfo.page}</p>
          <p>전체 페이지 수: {pageInfo.totalPages}</p>
        </PageInfo>
        <MatchCreate id = 'MatchCreate'>
           {/* 사용자가 로그인한 경우에만 "팀 생성" 버튼을 표시합니다. */}
           {isLoggedIn && <Link to="/match-post">경기 생성</Link>}
        </MatchCreate>
      </MatchScheduleContainer>
    </StyledMatchSchedule>
  );
};

export default MatchInfo;
