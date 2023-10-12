import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleSlider from '../match/SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import BoardSports from '../board/SportsCategory';
import Stat from '../board/stat/Stat';

const StyledTeam = styled.div`
  z-index: 9;
  margin-top: 70px;
  width: 100vw;
`;

const TeamContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const TeamTopAdvertisement = styled.div`
  width: 868px;
  height: 360px;
`;

const TeamSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const TeamBody = styled.div``;

const TeamBodyCalender = styled.div`
  width: 100vw;
  margin: 10px 0 10px 0;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
`;

const Team = () => {
  const [teames, setTeames] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/api/teames?page=1&size=40');
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
    };

    fetchData();
  }, []);

  return (
    <StyledTeam>
      <BoardSports />
      <TeamContainer>
        <TeamTop>
          <TeamTopAdvertisement>
            <SimpleSlider />
          </TeamTopAdvertisement>
        </TeamTop>

        <TeamBody>
          <BoardCategory />
          <TeamBodyCalender>
          </TeamBodyCalender>

          <TeamSchedule>
            {teames.map(team => (
              <div key={team.teamId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/team-detail/${team.teamId}`}>
                  <h2>매치 ID: {team.TeamId}</h2>
                </Link>
                <p>홈 팀 이름: {team.homeTeamName}</p>
                <p>매치 시간: {team.TeamTime}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </TeamSchedule>
        </TeamBody>

        <Stat />
      </TeamContainer>
    </StyledTeam>
  );
};

export default Team;
