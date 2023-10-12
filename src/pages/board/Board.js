import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBoard = styled.div`
    z-index: 9;
    margin-top: 70px;
    width: 100vw;
`;

const BoardContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardTop = styled.div`
    background-color: #F0FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
`;

const BoardBody = styled.div`
`;

const Board = () => {
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
        <StyledBoard>
            <BoardContainer>
                <BoardTop>
                    <h1>경기 일정</h1>
                </BoardTop>
                <BoardBody>
                    {matches.map(match => (
                        <div key={match.matchId}>
                            <h2>매치 ID: {match.matchId}</h2>
                            <p>홈 팀 이름: {match.homeTeamName}</p>
                            <p>매치 시간: {match.matchTime}</p>
                            {/* 필요한 다른 데이터들도 여기서 표시할 수 있습니다 */}
                        </div>
                    ))}
                </BoardBody>
                <div>
                    <p>현재 페이지: {pageInfo.page}</p>
                    <p>전체 페이지 수: {pageInfo.totalPages}</p>
                </div>
            </BoardContainer>
        </StyledBoard>
    );
};

export default Board;
