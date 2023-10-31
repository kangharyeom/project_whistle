import React, { useState, useEffect, useCallback  } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

const StyledMatchPost = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MatchPostContainer = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  background-color: #F0FFFF;
`;

const MatchPostBody = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F0FFFF;
`;

const MatchPostBodySelect = styled.select`
`;


const MatchPost = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;
  const userId = parseInt(localStorage.getItem('userId'));
  const authToken = localStorage.getItem('authToken'); 
  
  const hourOptions = Array.from({ length: 24 }, (_, index) => (index + 1).toString().padStart(2, '0'));
  const minuteOptions = Array.from({ length: 12 }, (_, index) => (index * 5).toString().padStart(2, '0'));

  const matchType = 'NORMAL'
  const [teamId, setTeamId] = useState(null);
  const [sportsType] = useState('SOCCER');
  // const [sportsType, setSportsType] = useState(''); //기능 추가시 주석해제
  const [ageType, setAgeType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [levelType, setLevelType] = useState('');
  const [uniformType, setUniformType] = useState('');
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + '/api/teams/users/' + userId);
      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          setTeamId(responseData.teamId);
          // setSportsType(responseData.sportsType);
          setAgeType(responseData.ageType);
          setLevelType(responseData.levelType);
          setUniformType(responseData.uniformType);
        } else {
          console.error('데이터를 가져오는 데 실패했습니다.');
        }
      } else {
        console.error('데이터를 가져오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const locationTypeOptions = ['SEOUL', 'INCHEON', 'DAEGU', 'BUSAN', 'GWANGJU', 'DAEJEON', 'GYEONGGI', 'JEJU', 'ULSAN', 'CHUNGCHEONGNAM', 'CHUNGCHEONGBUK', 'GYEONGSANGBUK', 'GYEONGSANGNAM', 'JEOLLABUK', 'JEOLLANAM', 'GANGWON'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'locationType':
        setLocationType(value);
        break;
      default:
        break;
    }
  };

  const handleCreateMatch = async () => {
    try {
      const formattedMinute = selectedMinute.toString().padStart(2, '0');
      const formattedTime = `${selectedHour}:${formattedMinute}`;
      
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken 
        },
        body: JSON.stringify({
          userId: userId,
          teamId: teamId,
          matchType: matchType,
          sportsType: sportsType,
          homeTeamAgeType: ageType,
          locationType: locationType,
          matchTime: `${formattedTime}`,
          matchDate: `${selectedDate.toISOString().substring(0, 10)}`,
          homeTeamLevelType: levelType,
          homeTeamUniformType: uniformType,
        })
      });
    
      if (response.ok) {
        console.log('매치 생성 성공');
        alert('매치 생성 성공');
        window.location.href = basicURL+'/match';
      } else {
        console.error('매치 생성 실패:', response.statusText);
        console.log('selectDate:'+selectedDate)
        console.log('time:'+formattedTime)
        alert('매치 생성 실패');
        window.location.href = basicURL+'/match-post';
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      alert('에러 발생');
      window.location.href = basicURL+'/match-post';
    }
  };

  return (
    <StyledMatchPost id ='StyledMatchPost'>
      <MatchPostContainer id = 'MatchPostContainer'>

        <MatchPostBody id ='MatchPostBody'>
          지역 :
          <MatchPostBodySelect
            name="locationType"
            value={locationType}
            onChange={handleInputChange}
            >
            {locationTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            </MatchPostBodySelect>
        
          <div>
            <label>Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select date"
            />
              <label>Time:</label>
              <div>
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                >
                  {hourOptions.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(e.target.value)}
                >
                  {minuteOptions.map((minute) => (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  ))}
                </select>
              </div>

              <p>Selected Time: {selectedHour}:{selectedMinute}</p>
            </div>
          <button onClick={handleCreateMatch}>경기 생성</button>
        </MatchPostBody>
      </MatchPostContainer>
    </StyledMatchPost>
  );
};

export default MatchPost;