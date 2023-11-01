import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import * as h from "../style/HeaderStyle";

const Header = () => {
    const basicURL = process.env.REACT_APP_API_ENDPOINT;
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = sessionStorage.getItem('authToken');

    // 토큰이 있으면 로그인 상태로 간주합니다.
    if (authToken) {
        setIsLoggedIn(true);
        
        // 30분 후에 세션 스토리지의 모든 항목을 삭제합니다.
        const sessionTimeout = setTimeout(() => {
            sessionStorage.clear();
            setIsLoggedIn(false);
            alert('시간이 되었습니다')
            // 여기서 필요한 추가 작업을 수행할 수 있습니다.
        }, 
        // 10000 (10초)
        // 1800000 [30분 (1800000 밀리초)]
        1800000
        ); 
        // 컴포넌트가 언마운트되거나 로그아웃될 때 타이머를 클리어합니다.
        return () => {
            clearTimeout(sessionTimeout);
        };
    } else {
        setIsLoggedIn(false);
    }
}, []);

    const handleClickHome = () => {
    // 클릭 시 "/match" 페이지로 이동
    navigate('/match');
    };
    
    const handleLogin = () => {
    // 클릭 시 "/login" 페이지로 이동
    navigate('/log-in');
    };

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        const token = 'Bearer '+refreshToken;
        // 로그아웃 로직을 처리한 후, 홈 페이지로 리다이렉트
        // 로그아웃 로직을 처리하고나면 아래의 코드를 호출
        // 로그아웃 시 토큰 제거
        
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/auth/logout', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: token 
              },
            });
            if (response.ok) {
                sessionStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('teamId');
                sessionStorage.removeItem('leagueId');
                sessionStorage.removeItem('matchId');
                console.log('authToken'+sessionStorage.getItem('authToken'));
                console.log('refreshToken'+localStorage.getItem('refreshToken'));
                console.log('userId'+sessionStorage.getItem('userId'));
                console.log('teamId'+sessionStorage.getItem('teamId'));
                console.log('leagueId'+sessionStorage.getItem('leagueId'));
                console.log('matchId'+sessionStorage.getItem('authToken'));
                console.log('로그아웃 성공');
                alert('로그아웃 성공');
                setIsLoggedIn(false);
                window.location.href = basicURL+'/'
              } else {
                console.log(token);
                console.error('로그아웃 실패:', response.statusText);
                alert('로그아웃 실패');
              }
            } catch (error) {
              console.error('API 요청 중 오류 발생:', error);
              alert('에러 발생');
            }
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (   
        <h.StyledHeader id="StyledHeader">
            
            <h.HeaderContainer id="HeaderContainer">
                <h.HeaderTopContainer id="HeaderTopContainer">
                    <h.HeaderTop id="HeaderTopId">
                            <h.HeaderTopLogo id="HeaderTopLogo">
                            <IconButton onClick={handleClickHome} style={{ width: '100%' }}>
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
                                        <>
                                        <div>
                                        <Button
                                            id="fade-button"
                                            aria-controls={open ? 'fade-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <IconButton >
                                                <img width={'30'} src="/images/jersey-blue.png" alt="마이페이지" />
                                            </IconButton>
                                        </Button>
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            TransitionComponent={Fade}
                                            variant="temporary"
                                            >
                                            <MenuItem id='mypage' onClick={handleClose}>마이페이지</MenuItem>
                                            <MenuItem onClick={handleClose}>내팀 정보</MenuItem>
                                            <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                                            
                                        </Menu>
                                        </div>
                                        </>
                                    ) : (
                                        // 로그인 상태가 아닌 경우 로그인 버튼 렌더링
                                        <IconButton onClick={handleLogin}>
                                              <img width={'30'} src="/images/jersey-blue.png" alt="로그인" />
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