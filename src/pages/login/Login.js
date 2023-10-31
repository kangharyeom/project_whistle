import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import * as l from '../../style/LoginStyle'

const Login = () => {
    const basicURL = process.env.REACT_APP_API_ENDPOINT;

    const handleClickGoogleLogin = () => {
        const externalURL = process.env.REACT_APP_SERVER_API_ENDPOINT+'/authorization/google'
        window.location.href = externalURL;
    };

    const handleClick = () => {
        window.location.href = basicURL;
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            console.log('로컬'+process.env.REACT_APP_API_ENDPOINT)
            console.log('서버'+process.env.REACT_APP_SERVER_API_ENDPOINT)

            if (response.ok) {
                const authToken = response.headers.get('Authorization'); // Authorization 헤더에서 토큰을 가져옴
                const refreshToken = authToken.replace("Bearer", "");
                localStorage.setItem('authToken', authToken);
                localStorage.setItem('refreshToken', refreshToken);

                const responseData = await response.json(); // 응답 데이터를 JSON 형태로 파싱
                const userId = responseData.userId; // 응답에서 userId 값을 가져옴
                localStorage.setItem('userId', userId); // userId 값을 localStorage에 저장
                
                console.log('로그인 성공!');
                console.log(refreshToken);

                alert('로그인 성공');
                window.location.href = basicURL;
            } else {
                console.error('로그인 실패!');
                alert('아이디와 비밀번호를 확인해주세요')
                window.location.href = basicURL+'/log-in';
                
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert('에러 발생했습니다. 다시 시도해주세요.');
            window.location.href = basicURL+'/log-in';
        }
    };

    return (   
        <l.StyledLogin>
            <l.LoginContainer id = 'LoginContainer'>
                <l.LoginBody id = 'LoginBody'>
                    <IconButton onClick={handleClick}>
                        <img style={{ width: '70%' }} src="/images/whistle-letter.png" alt="Whistle" />
                    </IconButton>
                    <l.LoginColumn id = 'LoginColumn'>
                            <Box component="form" 
                            sx={{'& .MuiTextField-root': { m: 1, width: '65%' }}} noValidate autoComplete="off">
                                <l.LoginBox id = 'LoginBox'>
                                <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="이메일" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" type="password" label="패스워드" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                                <Button sx={{width:'65%'}}variant="contained" size="small" type="submit" onClick={handleLogin}> 로그인 </Button>
                                </l.LoginBox>
                            </Box>
                        <l.LoginKaKao id = 'LoginKaKao'>
                        <IconButton onClick={handleClick}>
                            <img style={{ width: '70%' }} src="/images/kakao.png" alt="Whistle" />
                        </IconButton>
                        </l.LoginKaKao>
                    
                        <l.LoginNaver id = 'LoginNaver'>
                            <IconButton onClick={handleClick}>
                                <img style={{ width: '70%' }} src="/images/naver.png" alt="Whistle" />
                            </IconButton>
                        </l.LoginNaver>

                        <l.LoginGoogle id = 'LoginGoogle'>
                            <IconButton onClick={handleClickGoogleLogin} style={{ width: '100%' }}>
                                <img style={{ width: '80%' }} src="/images/google.png" height={45} alt="Whistle" />
                            </IconButton>
                        </l.LoginGoogle>
                    </l.LoginColumn>

                    <l.SignUp>
                        <Link to="/signup"> {/* react-router-dom의 Link 컴포넌트를 사용하여 회원가입 페이지로 이동 */}
                            회원가입
                        </Link>
                    </l.SignUp>

                    <l.LoginRow id = 'LoginRow'>
                        <l.SignUpKaKao id = 'SignUpKaKao'>
                            <IconButton onClick={handleClick}>
                                <img style={{ width: '100%' }} src="/images/kakao-small.png" alt="kakao" />
                            </IconButton>
                        </l.SignUpKaKao>
                    
                        <l.SignUpNaver id = 'SignUpNaver'>
                            <IconButton onClick={handleClick}>
                                <img style={{ width: '100%' }} src="/images/naver-small.png" alt="naver" />
                            </IconButton>
                        </l.SignUpNaver>

                        <l.SignUpGoogle id = 'SignUpGoogle'>
                            <IconButton onClick={handleClick}>
                                <img style={{ width: '100%' }} src="/images/google-small.png" alt="Whistle" />
                            </IconButton>
                        </l.SignUpGoogle>
                    </l.LoginRow>
                </l.LoginBody>
            </l.LoginContainer>
        </l.StyledLogin>
    );
}
  
export default Login;