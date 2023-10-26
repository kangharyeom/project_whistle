import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 불러옵니다.
import styled from 'styled-components';
import TeamProfile from '../team/TeamProfile';

const StyledMatchSchedule = styled.div`
background-color: #94cefe;
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
border-bottom: 0.1px solid gray;
box-shadow: rgba(50, 50, 93, 0.25) 3px 4px 8px -1px;
max-width: 470px;
background-color: white;
border-radius: 10px;
margin: 5% 0 5% 0;
width: 90%;
height: 200px;
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TeamInfoRow = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TeamInfoContainer = styled.div`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 0px;
  width: 94%;
  height: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TeamInfoLeft = styled.div`
border-radius: 3%;
  width: 35%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const HomeTeamName = styled.div`
font-size: medium;
font-weight: bold;
`;
const HomeTeamHonorScore = styled.div``;
const HomeTeamRecord = styled.div`
font-size: medium;
`;
const HomeTeamManager = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
gap: 3px;
font-size: small;
`;
const Location = styled.div`
font-weight: bolder;
`;
const HomeTeamAge = styled.div`
width: 80%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HomeTeamLevel = styled.div`
width: 80%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

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
const ManagerValue = styled.div`
font-size: small;
font-weight: bold;
`;
const LevelValue = styled.div`
height: 30px;
font-size: 20px;
font-weight: bold;
`;
const AgeValue = styled.div`
color: #064452;
font-size: 20px;
height: 30px;
font-weight: bold;
`;
const UniformValue = styled.div`
font-size: 20px;
height: 30px;
font-weight: bold;
`;

  const BattleSuggestionButton = styled.div``;

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


const TeamInfoDiv = styled.div`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 100%;
width: 65%;
display: flex;
flex-direction: column;
`;

const TeamInfoFirstNavAndSencondNav = styled.nav`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const TeamInfoFirstNav = styled.nav`

height: 50%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const TeamInfoSecondNav = styled.nav`
height: 50%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const TeamInfoThirdNav = styled.nav`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 35%;
width: 100%;
font-size: smaller;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

const TeamInfoFourthNav = styled.nav`
height: 35%;
width: 100%;
font-size: smaller;
display: flex;
flex-direction: column;
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

const MatchCreate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 470px;
 position: relative; 
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
            <TeamInfoRow>
              <TeamInfoContainer id = 'TeamInfoContainer'>
             
              <TeamInfoLeft id = 'TeamInfoLeft'>
                <TeamProfile/>
                <HomeTeamName id = 'HomeTeamName'>{match.homeTeamName}</HomeTeamName>
                  <HomeTeamManager id = 'HomeTeamManager'>매니저 
                    <ManagerValue>
                      {match.homeTeamManagerName}
                    </ManagerValue>
                  </HomeTeamManager>
                <HomeTeamHonorScore id = 'HomeTeamHonorScore'> 명예 점수 {match.homeTeamHonorScore} 점</HomeTeamHonorScore>
              </TeamInfoLeft>

              <TeamInfoDiv id = 'TeamInfoDiv'>
                <TeamInfoFirstNavAndSencondNav>
                  <TeamInfoFirstNav id = 'TeamInfoFirstNav'>
                      <MatchTime id = 'MatchTime'>
                          <p>{formatDate(match.matchDate)} {match.matchTime}</p>
                      </MatchTime>
                  </TeamInfoFirstNav>

                  <TeamInfoSecondNav id = 'TeamInfoSecondNav'>
                      <Location id = 'Location'>
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
                  </TeamInfoSecondNav>
                </TeamInfoFirstNavAndSencondNav>


                <TeamInfoThirdNav id = 'TeamInfoThirdNav'>
                  <HomeTeamLevel id = 'HomeTeamLevel'>
                    실력
                    <LevelValue>
                      {match.homeTeamLevelType === 'LOWEST' && '최하'}
                      {match.homeTeamLevelType === 'LOWER' && '하'}
                      {match.homeTeamLevelType === 'MIDDLE' && '중'}
                      {match.homeTeamLevelType === 'UPPER' && '상'}
                      {match.homeTeamLevelType === 'HIGHEST' && '최상'}
                    </LevelValue>
                  </HomeTeamLevel>
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
                    
                  <HomeTeamAge id = 'HomeTeamAge'>
                    연령대
                    <AgeValue>
                    {match.homeTeamAgeType === 'TEENAGER' && '10대'}
                    {match.homeTeamAgeType === 'UNIVERSITY_STUDENT' && '대학생'}
                    {match.homeTeamAgeType === 'TWENTIES' && '20대'}
                    {match.homeTeamAgeType === 'OFFICE_WORKER' && '회사원'}
                    {match.homeTeamAgeType === 'EARLY_SOCCER' && '조기축구회'}
                    {match.homeTeamAgeType === 'THIRTIETH' && '30대'}
                    {match.homeTeamAgeType === 'FORTIES' && '40대'}
                    {match.homeTeamAgeType === 'FIFTIES' && '50대'}
                    </AgeValue>
                  </HomeTeamAge>
                </TeamInfoThirdNav>
                <TeamInfoFourthNav>
                  전적
                  <HomeTeamRecord id = 'HomeTeamRecord'> 
                  {match.homeTeamTotalWinRecord+
                  match.homeTeamTotalDrawRecord+
                  match.homeTeamTotalLoseRecord}전 
                  {match.homeTeamTotalWinRecord}승 
                  {match.homeTeamTotalDrawRecord}무 
                  {match.homeTeamTotalLoseRecord}패
                </HomeTeamRecord>
                <BattleSuggestionButton id = 'BattleSuggestionButton'>경기 신청</BattleSuggestionButton>
                </TeamInfoFourthNav>
              </TeamInfoDiv>
            </TeamInfoContainer>
            </TeamInfoRow>
          </TeamInfo>
        ))}
        <PageInfo>
          <p>현재 페이지: {pageInfo.page}</p>
          <p>전체 페이지 수: {pageInfo.totalPages}</p>
        </PageInfo>
        <MatchCreate id = 'MatchCreate'>
          {isLoggedIn && (
            <CircularButton to="/match-post">
            <div className="plus">+</div>
          </CircularButton>
          )}
        </MatchCreate>
      </MatchScheduleContainer>
    </StyledMatchSchedule>
  );
};

export default MatchInfo;
