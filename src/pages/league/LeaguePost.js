import React, { useState } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';

const StyledLeaguePost = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaguePostContainer = styled.div`
  margin-top: 30px;
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaguePostTop = styled.div`
  background-color: #F0FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 470px;
`;

const LeaguePostBody = styled.div`
 width: 470px;
 display: flex;
 place-items: center;
 flex-direction: column;
 align-items: center;
`;

const LeaguePost = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;
  const userId = parseInt(localStorage.getItem('userId'));
  const teamId = 1;
  const [leagueName, setLeagueName] = useState('');
  const [ageType, setAgeType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [sportsType, setSportsType] = useState('');
  const [levelType, setLevelType] = useState('');
  const [period, setPeriod] = useState('');
  const [matchCount, setMatchCount] = useState('');
  const [frequency, setFrequency] = useState('');
  
  const ageTypeOptions = ['TEENAGER', 'UNIVERSITY_STUDENT', 'OFFICE_WORKER', 'EARLY_SOCCER'];
  const locationTypeOptions = ['SEOUL', 'INCHEON', 'DAEGU', 'BUSAN', 'GWANGJU', 'DAEJEON', 'GYEONGGI', 'JEJU', 'ULSAN', 'CHUNGCHEONGNAM', 'CHUNGCHEONGBUK', 'GYEONGSANGBUK', 'GYEONGSANGNAM', 'JEOLLABUK', 'JEOLLANAM', 'GANGWON'];
  const sportsTypeOptions = [ 'SOCCER', 'FUTSAL', 'BASEBALL', 'BASKETBALL'];
  const levelTypeOptions = ['LOWEST', 'LOWER', 'MIDDLE', 'UPPER', 'HIGHEST'];
  const frequencyOptions = ['NONE', 'WEEK_DAY', 'WEEK_END', 'ANY_TIME', 'SUNDAY', 'MONDAY','TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'leagueName':
        setLeagueName(value);
        break;
      case 'ageType':
        setAgeType(value);
        break;
      case 'locationType':
        setLocationType(value);
        break;
      case 'sportsType':
        setSportsType(value);
        break;
      case 'levelType':
        setLevelType(value);
        break;
      case 'period':
        setPeriod(value);
        break;
      case 'frequency':
        setFrequency(value);
        break;
      case 'matchCount':
        setMatchCount(value);
        break;
      default:
        break;
    }
  };

  const handleCreateLeague = async () => {
    const authToken = localStorage.getItem('authToken'); 

    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/leagues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken 
        },
        body: JSON.stringify(
          {
          userId: userId,
          teamId: teamId,
          leagueName: leagueName,
          ageType: ageType,
          locationType: locationType,
          sportsType: sportsType,
          levelType: levelType,
          period: period,
          frequency: frequency,
          matchCount: matchCount
        })
      });
      if (response.ok) {
        console.log('리그 생성 성공');
        alert('리그 생성 성공')
        window.location.href = basicURL+'/league'
      } else {
        console.error('리그 생성 실패');
        alert('리그 생성 실패')
        window.location.href = basicURL+'/league-post'
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      alert('에러 발생')
      window.location.href = basicURL+'/league-post'
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    // 선택한 날짜를 상태 변수에 저장합니다.
    setSelectedDate(date);
  };

  const handleNumberInputChange = (e) => {
    // 입력된 값이 숫자인지 확인하고 숫자이면 state를 업데이트합니다.
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setMatchCount(value);
    }
  };

  return (
    <StyledLeaguePost>
      <LeaguePostContainer>
        <LeaguePostTop>
        </LeaguePostTop>

        <LeaguePostBody>

            <div>
              <input
                type="text"
                name="leagueName"
                placeholder="리그 이름"
                value={leagueName}
                onChange={handleInputChange}
              />
              <select
                name="ageType"
                value={ageType}
                onChange={handleInputChange}
              >
                <option value="">연령대</option>
                {ageTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="locationType"
                value={locationType}
                onChange={handleInputChange}
              >
                <option value="">지역</option>
                {locationTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="sportsType"
                value={sportsType}
                onChange={handleInputChange}
              >
                <option value="">운동 유형</option>
                {sportsTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="levelType"
                value={levelType}
                onChange={handleInputChange}
              >
                <option value="">팀 실력</option>
                {levelTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
                <div>
                {/* 달력 입력란 */}
                <label>리그 기간:</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd" // 날짜 표시 형식 설정 (원하는 형식으로 변경 가능)
                    placeholderText="날짜를 선택하세요"
                />
                {/* 나머지 컴포넌트 내용 */}
                </div>
              <div>
                {/* 숫자 입력란 */}
                <label>경기 수:</label>
                <input 
                    type="number" 
                    value={matchCount} 
                    onChange={handleNumberInputChange} 
                    min="1" 
                    max="50" 
                    step="1" 
                    placeholder="1부터 50까지의 숫자를 입력하세요" 
                />
                {/* 나머지 컴포넌트 내용 */}
                </div>
              <select
                name="frequency"
                value={frequency}
                onChange={handleInputChange}
              >
                <option value="">팀 활동 빈도</option>
                {frequencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button onClick={handleCreateLeague}>팀 생성</button>
            </div>
        </LeaguePostBody>

      </LeaguePostContainer>
    </StyledLeaguePost>
  );
};

export default LeaguePost;