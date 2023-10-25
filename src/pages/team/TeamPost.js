import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TeamContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F0FFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamBody = styled.div`
   width: 100%;
  height: 100%;
  gap: 2%;
  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamPost = () => {
  const basicURL = process.env.REACT_APP_API_ENDPOINT;
  const userId = parseInt(localStorage.getItem('userId'));
  const [teamName, setTeamName] = useState('');
  const [ageType, setAgeType] = useState('');
  const [locationType, setLocationType] = useState('');
  const [sportsType, setSportsType] = useState('');
  const [levelType, setLevelType] = useState('');
  const [formation, setFormation] = useState('');
  const [uniformType, setUniformType] = useState('');
  const [frequency, setFrequency] = useState('');
  
  const ageTypeOptions = ['TEENAGER', 'UNIVERSITY_STUDENT', 'OFFICE_WORKER', 'EARLY_SOCCER'];
  const locationTypeOptions = ['SEOUL', 'INCHEON', 'DAEGU', 'BUSAN', 'GWANGJU', 'DAEJEON', 'GYEONGGI', 'JEJU', 'ULSAN', 'CHUNGCHEONGNAM', 'CHUNGCHEONGBUK', 'GYEONGSANGBUK', 'GYEONGSANGNAM', 'JEOLLABUK', 'JEOLLANAM', 'GANGWON'];
  const sportsTypeOptions = [ 'SOCCER', 'FUTSAL', 'BASEBALL', 'BASKETBALL'];
  const levelTypeOptions = ['LOWEST', 'LOWER', 'MIDDLE', 'UPPER', 'HIGHEST'];
  const formationOptions = [  'NONE', 'FOUR_ONE_TWO_ONE_TWO', 'FOUR_ONE_TWO_TREE', 'FOUR_ONE_TWO_THREE', 'FOUR_TWO_TWO_TWO', 'FOUR_TWO_TREE_ONE', 'FOUR_TREE_TWO_ONE', 'FOUR_THREE_THREE', 'FOUR_FOUR_TWO', 'FOUR_FOUR_ONE_ONE', 'FOUR_FIVE_ONE'];
  const uniformTypeOptions = [ 'NONE', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE', 'BLACK', 'WHITE'];
  const frequencyOptions = ['NONE', 'WEEK_DAY', 'WEEK_END', 'ANY_TIME', 'SUNDAY', 'MONDAY','TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'teamName':
        setTeamName(value);
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
      case 'formation':
        setFormation(value);
        break;
      case 'uniformType':
        setUniformType(value);
        break;
      case 'frequency':
        setFrequency(value);
        break;
      default:
        break;
    }
  };

  const handleCreateTeam = async () => {
    const authToken = localStorage.getItem('authToken'); 

    try {
      const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken 
        },
        body: JSON.stringify(
          {
          userId: userId,
          teamName: teamName,
          ageType: ageType,
          locationType: locationType,
          sportsType: sportsType,
          levelType: levelType,
          formation: formation,
          uniformType: uniformType,
          frequency: frequency
        })
      });
      if (response.ok) {
        console.log('팀 생성 성공');
        alert('팀 생성 성공')
        window.location.href = basicURL+'/team'
        // 팀 생성 성공 시 추가 작업 수행
      } else {
        console.error('팀 생성 실패');
        alert('팀 생성 실패')
        // 팀 생성 실패 시 에러 처리
        window.location.href = basicURL+'/team-post'
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
      alert('에러 발생')
      window.location.href = basicURL+'/team-post'
    }
  };

  return (
    <StyledTeam id = 'StyledTeam'>
      <TeamContainer id = 'TeamContainer'>

        <TeamBody id = 'TeamBody'>
              <input
                type="text"
                name="teamName"
                placeholder="팀 이름"
                value={teamName}
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
              <select
                name="formation"
                value={formation}
                onChange={handleInputChange}
              >
                <option value="">팀 포메이션</option>
                {formationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="uniformType"
                value={uniformType}
                onChange={handleInputChange}
              >
                <option value="">유니폼 색상</option>
                {uniformTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
              <button onClick={handleCreateTeam}>팀 생성</button>
        </TeamBody>
      </TeamContainer>
    </StyledTeam>
  );
};

export default TeamPost;