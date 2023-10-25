import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleSlider from '../match/SimpleSlider';
import BoardCategory from '../board/BoardCategory';

const StyledLeague = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeagueTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeagueTopAdvertisement = styled.div`
  width: 470px;
`;

const LeagueSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeagueBody = styled.div``;


const League = () => {
  const [Leaguees, setLeaguees] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/leagues?page=1&size=40');
        if (response.ok) {
          const jsonData = await response.json();
          setLeaguees(jsonData.data);
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
    <StyledLeague>
      <LeagueContainer>
        <LeagueTop>
          <LeagueTopAdvertisement>
            <SimpleSlider />
          </LeagueTopAdvertisement>
        </LeagueTop>

        <LeagueBody>
          <BoardCategory />

          <LeagueSchedule>
            {Leaguees.map(league => (
              <div key={league.leagueId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/League-detail/${league.leagueId}`}>
                  <h2>매치 ID: {league.leagueId}</h2>
                </Link>
                <p>리그 이름: {league.leagueName}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </LeagueSchedule>
            {isLoggedIn && <Link to="/league-post">리그 생성</Link>}
        </LeagueBody>

      </LeagueContainer>
    </StyledLeague>
  );
};

export default League;
