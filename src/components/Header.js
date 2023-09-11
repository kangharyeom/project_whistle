import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const StyledHeader = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

// 컨테이너

const HeaderContainer = styled.div`
z-index: 10;
width: 100vw;
height: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// 헤더 상단
const HeaderTopContainer = styled.div`
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

const HeaderTop = styled.div`
width: 1024px;
height: 40px;
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
`;

const HeaderTopSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 540px;
height: 40px;
`;

const HeaderTopLoginButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 100%;
`;

const Header = () => {
   
    // 동작
    const navigate = useNavigate();

    const handleClick = () => {
    // 클릭 시 "/matching" 페이지로 이동
    navigate('/matching');
    };
    
    const handleLogin = () => {
    // 클릭 시 "/login" 페이지로 이동
    navigate('/log-in');
    };

    return (   
        <StyledHeader id="StyledHeaderId">
            <HeaderContainer id="HeaderContainerId">
                <HeaderTopContainer id="HeaderTopContainerId">
                    <HeaderTop id="HeaderTopId">
                            <HeaderTopLogo id="HeaderLogoId">
                            <IconButton onClick={handleClick}>
                                    <img width={160} src="/images/whistle-letter.png" alt="Whistle" />
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
                                <IconButton onClick={handleLogin}>
                                    <img width={40} src="/images/free-icon-soccer-jersey-212273.png" alt="Whistle" />
                                </IconButton>
                                </HeaderTopLoginButton>
                    </HeaderTop >
                </HeaderTopContainer>
            </HeaderContainer>
        </StyledHeader>
    );
}
  
export default Header;