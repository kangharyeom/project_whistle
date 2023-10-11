import React from 'react';

import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import * as h from "../style/HeaderStyle";

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
        <h.StyledHeader id="StyledHeaderId">
            <h.HeaderContainer id="HeaderContainerId">
                <h.HeaderTopContainer id="HeaderTopContainerId">
                    <h.HeaderTop id="HeaderTopId">
                            <h.HeaderTopLogo id="HeaderLogoId">
                            <IconButton onClick={handleClick}>
                                    <img width={160} src="/images/whistle-letter.png" alt="Whistle" />
                                </IconButton>
                            </h.HeaderTopLogo>
                            <h.HeaderTopSearch id="HeaderSearchId">
                                <TextField size='small' sx={{width:1, backgroundColor: '#F5F5F5'}} variant="outlined" InputProps={{ endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                                </h.HeaderTopSearch>
                            <h.HeaderTopLoginButton id="HeaderLoginButtonId" >
                                    <IconButton onClick={handleLogin}>
                                        <img width={40} src="/images/free-icon-soccer-jersey-212273.png" alt="로그인" />
                                    </IconButton>
                                </h.HeaderTopLoginButton>
                    </h.HeaderTop >
                </h.HeaderTopContainer>
            </h.HeaderContainer>
        </h.StyledHeader>
    );
}
  
export default Header;