import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleSlider from '../match/SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import BoardSports from '../board/SportsCategory';
import Stat from '../board/stat/Stat';

const StyledLeague = styled.div`
  z-index: 9;
  margin-top: 70px;
  width: 100vw;
`;

const LeagueContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeagueTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const LeagueTopAdvertisement = styled.div`
  width: 868px;
  height: 360px;
`;

const LeagueSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const LeagueBody = styled.div``;

const LeagueBodyCalender = styled.div`
  width: 100vw;
  margin: 10px 0 10px 0;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
`;

const League = () => {
  const [Leaguees, setLeaguees] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/leaguees?page=1&size=40');
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
    };

    fetchData();
  }, []);

  return (
    <StyledLeague>
      <BoardSports />
      <LeagueContainer>
        <LeagueTop>
          <LeagueTopAdvertisement>
            <SimpleSlider />
          </LeagueTopAdvertisement>
        </LeagueTop>

        <LeagueBody>
          <BoardCategory />
          <LeagueBodyCalender>
          </LeagueBodyCalender>

          <LeagueSchedule>
            {Leaguees.map(League => (
              <div key={League.LeagueId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/League-detail/${League.LeagueId}`}>
                  <h2>매치 ID: {League.LeagueId}</h2>
                </Link>
                <p>홈 팀 이름: {League.homeTeamName}</p>
                <p>매치 시간: {League.LeagueTime}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </LeagueSchedule>
        </LeagueBody>

        <Stat />
      </LeagueContainer>
    </StyledLeague>
  );
};

export default League;
