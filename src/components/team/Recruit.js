import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TeamSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TeamMemberRecruitComponent = () => {
    const [teames, setTeames] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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
    };

    fetchData();

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정합니다.

  return (
    <>
      <TeamSchedule>
      {teames.map(team => (
              <div key={team.teamId}>
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
            {isLoggedIn && <Link to="/team-post">팀 생성</Link>}
      </TeamSchedule>
    </>
  );
};
