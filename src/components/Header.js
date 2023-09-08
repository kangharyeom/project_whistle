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
width: 100vw;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;



// 헤더 상단
const HeaderTopContainer = styled.div`
z-index: 1;
border-top: 3px solid #125b9f;
border-bottom: 4px solid #EBEBEB;
position: fixed;
    top: 0;
    left: 0;
    right: 0;
background-color: white;
width: 100vw;
height: 90px;
display: flex;
justify-content: center;
align-items: center;

`;

const HeaderTop = styled.div`
width: 1264px;
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

`;



// 헤더 하단

const HeaderBottom = styled.div`

`;



const Header = ({ isLoggedIn, handleLogin }) => {
   

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
                                    <img width={240} src="/images/whistle-letter.png" alt="Whistle" />
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
                                    <img width={50} src="/images/free-icon-soccer-jersey-212273.png" alt="Whistle" />
                                </IconButton>
                                </HeaderTopLoginButton>
                    </HeaderTop >
                </HeaderTopContainer>
                <HeaderMiddle id="HeaderMiddleId">
                       
                </HeaderMiddle>
                <HeaderBottom id="HeaderBottomId">
                </HeaderBottom >
            </HeaderContainer>
        </StyledHeader>
    );
}
  
export default Header;