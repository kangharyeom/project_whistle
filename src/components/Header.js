import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import * as h from "../style/HeaderStyle";

const Header = () => {
    // 동작
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');

        // 토큰이 있으면 로그인 상태로 간주합니다.
        if (authToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleClick = () => {
    // 클릭 시 "/match" 페이지로 이동
    navigate('/match');
    };
    
    const handleLogin = () => {
    // 클릭 시 "/login" 페이지로 이동
    navigate('/log-in');
    };

    const handleLogout = () => {
        // 로그아웃 로직을 처리한 후, 홈 페이지로 리다이렉트
        // 로그아웃 로직을 처리하고나면 아래의 코드를 호출
        // logout();

        // 로그아웃 시 토큰을 제거합니다.
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);

        navigate('/');
    };

    return (   
        <h.StyledHeader id="StyledHeader">
            <h.HeaderContainer id="HeaderContainer">
                <h.HeaderTopContainer id="HeaderTopContainer">
                    <h.HeaderTop id="HeaderTopId">
                            <h.HeaderTopLogo id="HeaderTopLogo">
                            <IconButton onClick={handleClick} style={{ width: '100%' }}>
                                    <img style={{ width: '100px', height: 'auto'}} 
                                    src="/images/whistle-letter.png" alt="Whistle" />
                                </IconButton>
                            </h.HeaderTopLogo>
                            <h.HeaderTopSearch id="HeaderTopSearch">
                                <TextField size='small' sx={{width:1, backgroundColor: '#F5F5F5'}} variant="outlined" InputProps={{ endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                                </h.HeaderTopSearch>
                                 <h.HeaderTopLoginButton id="HeaderTopLoginButton">
                                    {isLoggedIn ? (
                                        // 로그인 상태이면서 authorization이 있는 경우 로그아웃 버튼 렌더링
                                        <IconButton onClick={handleLogout}>
                                            <img width={'40'} src="/images/jersey-red.png" alt="로그아웃" />
                                        </IconButton>
                                    ) : (
                                        // 로그인 상태가 아닌 경우 로그인 버튼 렌더링
                                        <IconButton onClick={handleLogin}>
                                            <img width={'35'} src="/images/jersey-blue.png" alt="로그인" />
                                        </IconButton>
                                    )}
                                </h.HeaderTopLoginButton>
                    </h.HeaderTop >
                </h.HeaderTopContainer>
            </h.HeaderContainer>
        </h.StyledHeader>
    );
}
  
export default Header;