import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleSlider from '../match/SimpleSlider';
import BoardCategory from '../board/BoardCategory';

const StyledTeam = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
`;

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TeamTopAdvertisement = styled.div`
  width: 100%;
`;

const TeamSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TeamBody = styled.div``;

const TeamBodyCalender = styled.div`
  width: 100%;
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const fetchData = async () => {
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
      if (authToken) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
    };
    

    fetchData();
  }, []);

  return (
    <StyledTeam>
      <TeamContainer>
        <TeamTop>
          <TeamTopAdvertisement>
            <SimpleSlider />
          </TeamTopAdvertisement>
        </TeamTop>

        <TeamBody>
          <BoardCategory />
          <TeamBodyCalender>
            {/* 여기에 캘린더 컴포넌트 추가 */}
          </TeamBodyCalender>

          <TeamSchedule>
            {teames.map(team => (
              <div key={team.teamId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/team-detail/${team.teamId}`}>
                  <h2>팀 ID: {team.teamId}</h2>
                </Link>
                <p>홈 팀 이름: {team.teamName}</p>
                <p>팀 시간: {team.TeamTime}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </TeamSchedule>
          {/* 사용자가 로그인한 경우에만 "팀 생성" 버튼을 표시합니다. */}
          {isLoggedIn && <Link to="/team-post">팀 생성</Link>}
        </TeamBody>
      </TeamContainer>
    </StyledTeam>
  );
};

export default Team;
