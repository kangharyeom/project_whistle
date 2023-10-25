import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledMatchDetail = styled.div`
  margin-top: 70px;
  width: 100vw;
`;

const MatchDetailSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const MatchDetailBody = styled.div``;

const MatchDetail = () => {
  const { matchId } = useParams();
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+`/api/matches/${matchId}`);
        if (response.ok) {
          const jsonData = await response.json();
          setMatchData(jsonData); // 가져온 데이터를 state에 저장
        } else {
          console.error('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    fetchMatchData();
  }, [matchId]); // matchId를 의존성 배열에 추가하여 matchId가 변경될 때마다 API를 호출합니다.

  return (
    <StyledMatchDetail>

        <MatchDetailBody>
          <MatchDetailSchedule>
            {matchData && (
              <div>
                <h2>매치 ID: {matchData.matchId}</h2>
                <p>홈 팀 이름: {matchData.homeTeamName}</p>
                <p>매치 시간: {matchData.matchTime}</p>
                {/* 필요한 다른 데이터들도 여기서 표시할 수 있습니다 */}
              </div>
            )}
          </MatchDetailSchedule>
        </MatchDetailBody>
    </StyledMatchDetail>
  );
};

export default MatchDetail;
