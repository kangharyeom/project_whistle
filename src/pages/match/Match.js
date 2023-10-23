import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 불러옵니다.
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import Stat from '../board/stat/Stat';
import Calender from './Calender';

const StyledMatch = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

const MatchContainer = styled.div`
  justify-content: center;
  width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MatchTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const MatchTopAdvertisement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
  height: 360px;
`;

const MatchSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const MatchBody = styled.div``;

const MatchBodyCalender = styled.div`
  width: 470px;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
`;

const Match = () => {
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
  
  return (
    <StyledMatch id="StyledMatchId">
      <MatchContainer>
        <MatchTop>
          <MatchTopAdvertisement>
            <SimpleSlider />
          </MatchTopAdvertisement>
        </MatchTop>

        <MatchBody>
          <BoardCategory />
          <MatchBodyCalender>
            <Calender />
          </MatchBodyCalender>

          <MatchSchedule>
            {matches.map(match => (
              <div key={match.matchId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/match-detail/${match.matchId}`}>
                  <h2>매치 ID: {match.matchId}</h2>
                </Link>
                <p>팀 이름: {match.homeTeamName}</p>
                <p>팀 매니저: {match.homeTeamManagerName}</p>
                <p>팀 실력: {match.homeTeamLevelType}</p>
                <p>연령대: {match.homeTeamAgeType}</p>
                <p>유니폼: {match.homeTeamUniformType}</p>
                <p>경기 유형: {match.matchType}</p>
                <p>운동 유형: {match.sportsType}</p>
                <p>지역: {match.locationType}</p>
                <p>경기 진행 상태: {match.matchStatus}</p>
                <p>경기 규칙: {match.matchRules}</p>
                <p>경기 일정: {match.matchDate} {match.matchTime}</p>
                <p>명예점수: {match.homeTeamHonorScore}</p>
                <p>전적: {match.homeTeamTotalWinRecord+match.homeTeamTotalDrawRecord+match.homeTeamTotalLoseRecord}전 {match.homeTeamTotalWinRecord}승 {match.homeTeamTotalDrawRecord}무 {match.homeTeamTotalLoseRecord}패</p>
                <p>명예점수: {match.homeTeamHonorScore}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </MatchSchedule>
           {/* 사용자가 로그인한 경우에만 "팀 생성" 버튼을 표시합니다. */}
           {isLoggedIn && <Link to="/match-post">경기 생성</Link>}
        </MatchBody>

        <Stat />
      </MatchContainer>
    </StyledMatch>
  );
};

export default Match;
