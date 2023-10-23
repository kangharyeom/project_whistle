import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// 컨테이너

export const HeaderContainer = styled.div`
width: 470px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// 헤더 상단
export const HeaderTopContainer = styled.div`
border-top: 4px solid #125b9f;
border-bottom: 4px solid #EBEBEB;
background-color: white;
width: 470px;
display: flex;
justify-content: center;
align-items: center;

`;

export const HeaderTop = styled.div`
width: 470px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderTopLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const HeaderTopSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 200px;
`;

export const HeaderTopLoginButton = styled.div`
display: flex;
font-size: 12px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60px;
height: 100%;
`;