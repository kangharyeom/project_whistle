import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

// 컨테이너

export const HeaderContainer = styled.div`
z-index: 10;
width: 100vw;
height: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// 헤더 상단
export const HeaderTopContainer = styled.div`
border-top: 3px solid #125b9f;
border-bottom: 4px solid #EBEBEB;
position: fixed;
    top: 0;
    left: 0;
    right: 0;
background-color: white;
width: 100vw;
height: 60px;
display: flex;
justify-content: center;
align-items: center;

`;

export const HeaderTop = styled.div`
width: 948px;
height: 40px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
`;

export const HeaderTopLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
`;

export const HeaderTopSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 480px;
height: 40px;
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