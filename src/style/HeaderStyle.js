import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
z-index: 100;
`;

// 컨테이너
export const HeaderContainer = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px;
max-width: 470px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// 헤더 상단
export const HeaderTopContainer = styled.div`
width: 100%;
height: 50px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export const HeaderTop = styled.div`
width: 100%;
margin: 0 5% 0 5% ;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderTopLogo = styled.div`
width: 25%;
display: flex;
justify-content: center;
align-items: center;
`;

export const HeaderTopSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
`;

export const HeaderTopLoginButton = styled.div`
display: flex;
font-size: 12px;
flex-direction: column;
justify-content: center;
align-items: center;
width: 15%;
height: 100%;
`;