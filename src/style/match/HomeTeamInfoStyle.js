import styled from "styled-components";

export const StyledMatchSchedule = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MatchScheduleContainer = styled.div`
  background-color: #e5f6fd;
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TeamInfo = styled.div`
border-bottom: 0.1px solid gray;
box-shadow: rgba(50, 50, 93, 0.25) 3px 4px 8px -1px;
max-width: 470px;
background-color: white;
border-radius: 10px;
margin: 3% 0 3% 0;
width: 90%;
height: 200px;
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TeamInfoRow = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TeamInfoContainer = styled.div`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 0px;
  width: 94%;
  height: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TeamInfoLeft = styled.div`
border-radius: 3%;
  width: 35%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

export const HomeTeamName = styled.div`
font-size: medium;
font-weight: bold;
`;
export const HomeTeamHonorScore = styled.div``;
export const HomeTeamRecord = styled.div`
font-size: medium;
`;
export const HomeTeamManager = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
gap: 3px;
font-size: small;
`;
export const Location = styled.div`
font-weight: bolder;
`;
export const HomeTeamAge = styled.div`
width: 80%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HomeTeamLevel = styled.div`
width: 80%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const HomeTeamUniformType = styled.div`
width: 60%;
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
${props => props.color === 'ORANGE' && `
  ${Circle} {
    background-color: ORANGE;
  }
`}
`;
export const ManagerValue = styled.div`
font-size: small;
font-weight: bold;
`;
export const LevelValue = styled.div`
height: 30px;
font-size: 20px;
font-weight: bold;
`;
export const AgeValue = styled.div`
color: #064452;
font-size: 20px;
height: 30px;
font-weight: bold;
`;
export const UniformValue = styled.div`
font-size: 20px;
height: 30px;
font-weight: bold;
`;

  export const BattleSuggestionButton = styled.div``;

  export const Circle = styled.div`
  width: 20px;
  margin-top: 25%;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color || 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  `;


export const TeamInfoRight = styled.div`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 100%;
width: 65%;
display: flex;
flex-direction: column;
`;

export const TeamInfoFirstNavAndSencondNav = styled.nav`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const TeamInfoFirstNav = styled.nav`

height: 50%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const TeamInfoSecondNav = styled.nav`
height: 50%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const TeamInfoThirdNav = styled.nav`
border-radius: 3%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 0px 0px;
height: 35%;
width: 100%;
font-size: smaller;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export const TeamInfoFourthNav = styled.nav`
height: 35%;
width: 100%;
font-size: smaller;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const MatchTime = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MatchCreate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 470px;
 position: relative; 
`;