import React, { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const StyledHeader = styled.div`
width: 100vw;
display: flex;
place-items: c;
flex-direction: column;
align-items: center;
`;

// 컨테이너

const HeaderContainer = styled.div`
border-top: 4px solid #125b9f;
width: 1264px;
height: 280px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



// 헤더 상단
const HeaderTopContainer = styled.div`
border-radius: 10px;
margin-bottom: 12px;
width: 1264px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ECECEC;
`;

const HeaderTop = styled.div`
width: 1100px;
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
width: 600px;
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
border-radius: 10px;
width: 948px;
height: 100px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
`;



// 헤더 하단

const HeaderBottom = styled.div`
border-radius: 10px;
width: 1024px;
height: 60px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
background-color: #ECF7FF;
margin: 12px 0 24px 0;
`;



const Header = () => {

    // 동작
    const navigate = useNavigate();

    const handleClick = () => {
    // 클릭 시 "/matching" 페이지로 이동
    navigate('/matching');
    };

    const [middleValue, setMiddleValue] = useState(0); // Initialize the active tab index
    const [bottomValue, setBottomValue] = useState(0); // Initialize the active tab index

    const middleHandleChange = (event, newValue) => {
      // Update the active tab index when a tab is clicked
      setMiddleValue(newValue);
    };

    const bottomHandleChange = (event, newValue) => {
        // Update the active tab index when a tab is clicked
        setBottomValue(newValue);
      };

    return (   
        <StyledHeader id="StyledHeaderId">
            <HeaderContainer id="HeaderContainerId">
                <HeaderTopContainer id="HeaderTopContainerId">
                    <HeaderTop id="HeaderTopId">
                            <HeaderTopLogo id="HeaderLogoId">
                            <IconButton onClick={handleClick}>
                                    <img width={50} src="/images/whistle.png" alt="Whistle" />
                                </IconButton>
                            </HeaderTopLogo>
                            <HeaderTopSearch id="HeaderSearchId">
                                <TextField sx={{width:1, backgroundColor: '#F5F5F5'}} variant="outlined" InputProps={{ endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                                </HeaderTopSearch>
                            <HeaderTopLoginButton id="HeaderLoginButtonId" >
                                <IconButton onClick={handleClick}>
                                    <img width={50} src="/images/free-icon-soccer-jersey-212273.png" alt="Whistle" />
                                </IconButton>
                                </HeaderTopLoginButton>
                    </HeaderTop >
                </HeaderTopContainer>
                <HeaderMiddle id="HeaderMiddleId">
                        <Tabs
                            value={middleValue}
                            onChange={middleHandleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            aria-label="scrollable force tabs example"
                            centered
                        >
                            <Tab icon={ <img src="/images/free-icon-football-5407722.png" alt="축구" width={'50px'} />} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}} label="축구" />
                            <Tab icon={ <img src="/images/free-icon-football-5407722.png" alt="풋살"  width={'50px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="풋살" />
                            <Tab icon={ <img src="/images/free-icon-baseball-5407447.png" alt="야구"  width={'50px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="야구" />
                            <Tab icon={ <img src="/images/free-icon-basketball-5407751.png" alt="농구"  width={'50px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="농구" />
                            <Tab icon={ <img src="/images/free-icon-volleyball-5407491.png" alt="그 외"  width={'50px'}/>} style={{width: '160px', fontWeight:'bold', fontSize: '18px'}}  label="그 외" />
                        </Tabs>
                </HeaderMiddle>
                <HeaderBottom id="HeaderBottomId">
                    <Tabs 
                        indicatorColor='primary'
                        value={bottomValue}
                        onChange={bottomHandleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        aria-label="scrollable auto tabs example"
                        centered
                    >
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="경기 매칭" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="리그" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="랭킹" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="팀원 모집" />
                        <Tab style={{ width: '180px', fontSize: '18px', fontWeight:'bold'}} label="자유 게시판" />
                    </Tabs>
                </HeaderBottom >
            </HeaderContainer>
        </StyledHeader>
    );
}
  
export default Header;