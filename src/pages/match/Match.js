import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SimpleSlider from './SimpleSlider'
import BoardCategory from '../board/BoardCategory';
import BoardSports from '../board/SportsCategory';
import Stat from '../board/stat/Stat';
import Calender from './Calender';
// import Board from '../board/Board';

const StyledMatch = styled.div`
z-index: 9;
margin-top: 70px;
width: 100vw;
`;

const MatchContainer = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
`;

const MatchTop = styled.div`
background-color: #F0FFFF;
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
`;

const MatchTopAdvertisement = styled.div`
  width: 868px;
  height: 360px;
`;

const MatchSchedule = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
`;

const MatchBody = styled.div`
`;

const MatchBodyCalender = styled.div`
width: 100vw;
margin: 10px 0 10px 0;
height: 120px;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

const Match = () => { 
  const [matches, setMatches] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/api/matches?page=1&size=40');
              if (response.ok) {
                  const jsonData = await response.json();
                  setMatches(jsonData.data); // 응답에서 matches 배열을 가져와 state에 저장
                  setPageInfo(jsonData.pageInfo); // 응답에서 pageInfo 객체를 가져와 state에 저장
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
    <StyledMatch>
        <BoardSports/>
        <MatchContainer>
          <MatchTop>
            <MatchTopAdvertisement>
              <SimpleSlider/>
            </MatchTopAdvertisement>
          </MatchTop>
        
          <MatchBody>
            <BoardCategory/>
            <MatchBodyCalender>
              <Calender/>
            </MatchBodyCalender>
            {/* <Board/> */}
            <MatchSchedule>
              {matches.map(match => (
                <div key={match.matchId}>
                        <h2>매치 ID: {match.matchId}</h2>
                        <p>홈 팀 이름: {match.homeTeamName}</p>
                        <p>매치 시간: {match.matchTime}</p>
                        {/* 필요한 다른 데이터들도 여기서 표시할 수 있습니다 */}
                    </div>
                  )
                  )
                }
              <div>
                <p>현재 페이지: {pageInfo.page}</p>
                <p>전체 페이지 수: {pageInfo.totalPages}</p>
              </div>
            </MatchSchedule>

            </MatchBody>
          <Stat/>
        </MatchContainer>
    </StyledMatch>
  );
}

export default Match;