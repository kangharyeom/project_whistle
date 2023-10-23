import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SimpleSlider from '../match/SimpleSlider';
import BoardCategory from '../board/BoardCategory';
import Stat from '../board/stat/Stat';

const StyledRanking = styled.div`
  z-index: 9;
  width: 100vw;
`;

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RankingTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const RankingTopAdvertisement = styled.div`
  width: 470px;
`;

const RankingSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const RankingBody = styled.div``;

const RankingBodyCalender = styled.div`
  width: 470px;
  margin: 10px 0 10px 0;
  height: 120px;
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
`;

const Ranking = () => {
  const [Rankinges, setRankinges] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/rankings?page=1&size=40');
        if (response.ok) {
          const jsonData = await response.json();
          setRankinges(jsonData.data);
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
    <StyledRanking>
      <RankingContainer>
        <RankingTop>
          <RankingTopAdvertisement>
            <SimpleSlider />
          </RankingTopAdvertisement>
        </RankingTop>

        <RankingBody>
          <BoardCategory />
          <RankingBodyCalender>
            {/* 여기에 캘린더 컴포넌트 추가 */}
          </RankingBodyCalender>

          <RankingSchedule>
            {Rankinges.map(Ranking => (
              <div key={Ranking.RankingId}>
                {/* 각 매치 ID에 대한 링크를 생성합니다. */}
                <Link to={`/Ranking-detail/${Ranking.RankingId}`}>
                  <h2>팀 ID: {Ranking.RankingId}</h2>
                </Link>
                <p>홈 팀 이름: {Ranking.RankingName}</p>
                <p>팀 시간: {Ranking.RankingTime}</p>
              </div>
            ))}
            <div>
              <p>현재 페이지: {pageInfo.page}</p>
              <p>전체 페이지 수: {pageInfo.totalPages}</p>
            </div>
          </RankingSchedule>
          {/* 사용자가 로그인한 경우에만 "팀 생성" 버튼을 표시합니다. */}
          {isLoggedIn && <Link to="/Ranking-post">팀 생성</Link>}
        </RankingBody>

          {isLoggedIn &&<Stat />}
      </RankingContainer>
    </StyledRanking>
  );
};

export default Ranking;
