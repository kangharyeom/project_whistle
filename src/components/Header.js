import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const StyledHeader = styled.div`
width: 100vw;
background-color: #f2f2f2;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

// 컨테이너

const HeaderContainer = styled.div`
border-top: 8px solid #125b9f;
width: 768px;
height: 240px;
background-color: #d1c6c6;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



// 헤더 상단
const HeaderTopContainer = styled.div`
border-bottom: 4px solid #bcbcbc;
width: 768px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: #e5e5e5;
`;

const HeaderTop = styled.div`
width: 680px;
height: 60px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
`;

const HeaderTopLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 100%;
`;

const HeaderTopSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 460px;
height: 60px;
`;

const HeaderTopLoginButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 100%;
`;



// 헤더 중간

const HeaderMiddle = styled.div`
width: 768px;
height: 80px;
background-color: #bbd1ac;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
`;
const HeaderMiddleSoccer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #68bae3;
width: 100px;
height: 100%;
`;

const HeaderMiddleBaseball = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #68bae3;
width: 100px;
height: 100%;
`;

const HeaderMiddleFootsal = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #68bae3;
width: 100px;
height: 100%;
`;

const HeaderMiddleBasketball = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #68bae3;
width: 100px;
height: 100%;
`;

const HeaderMiddleETC = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #68bae3;
width: 100px;
height: 100%;
`;



// 헤더 하단

const HeaderBottom = styled.div`
width: 768px;
height: 60px;
background-color:#bdcfdf;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;



const HeaderBottomMatching = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #df8870;
width: 140px;
height: 100%;
`;

const HeaderBottomLeague = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #df8870;
width: 140px;
height: 100%;
`;

const HeaderBottomRanking = styled.div`
background-color: #df8870;
display: flex;
justify-content: center;
align-items: center;
width: 140px;
height: 100%;
`;

const HeaderBottomRecruite = styled.div`
background-color: #df8870;
display: flex;
justify-content: center;
align-items: center;
width: 140px;
height: 100%;
`;

const HeaderBottomBoard = styled.div`
background-color: #df8870;
display: flex;
justify-content: center;
align-items: center;
width: 140px;
height: 100%;
`;



const Header = () => {

    // 동작
    const navigate = useNavigate();

    const handleClick = () => {
    // 클릭 시 "/matching" 페이지로 이동
    navigate('/matching');
    };

    return (   
        <StyledHeader id="StyledHeaderId">
            <HeaderContainer id="HeaderContainerId">
                <HeaderTopContainer id="HeaderTopContainerId">
                    <HeaderTop id="HeaderTopId">
                            <HeaderTopLogo id="HeaderLogoId">
                            <IconButton onClick={handleClick}>
                                    <img width={40} src="/images/whistle.png" alt="Whistle" />
                                </IconButton>
                            </HeaderTopLogo>
                            <HeaderTopSearch id="HeaderSearchId">
                                <TextField sx={{width:1}}
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                                </HeaderTopSearch>
                            <HeaderTopLoginButton id="HeaderLoginButtonId" >
                                <IconButton onClick={handleClick}>
                                    <img width={40} src="/images/free-icon-soccer-jersey-212273.png" alt="Whistle" />
                                </IconButton>
                                </HeaderTopLoginButton>
                    </HeaderTop >
                </HeaderTopContainer>
                <HeaderMiddle id="HeaderMiddleId">
                        <HeaderMiddleSoccer id='HeaderMiddleSoccerId'>축구</HeaderMiddleSoccer>
                        <HeaderMiddleFootsal id='HeaderMiddleFootsalId'>풋살</HeaderMiddleFootsal>
                        <HeaderMiddleBaseball id='HeaderMiddleBaseballId'>야구</HeaderMiddleBaseball>
                        <HeaderMiddleBasketball id='HeaderMiddleBasketballId'>농구</HeaderMiddleBasketball>
                        <HeaderMiddleETC id='HeaderMiddleETCId'>그 외</HeaderMiddleETC>
                </HeaderMiddle>
                <HeaderBottom id="HeaderBottomId">
                    <HeaderBottomMatching id="HeaderMatchingId">경기 매칭</HeaderBottomMatching>
                    <HeaderBottomLeague id="HeaderLeagueId">리그</HeaderBottomLeague>
                    <HeaderBottomRanking id="HeaderRankingId">랭킹</HeaderBottomRanking>
                    <HeaderBottomRecruite id="HeaderRecruiteId">팀원 모집</HeaderBottomRecruite>
                    <HeaderBottomBoard id="HeaderBoardId">자유 게시판 </HeaderBottomBoard>
                </HeaderBottom >
            </HeaderContainer>
        </StyledHeader>
    );
}
  
export default Header;