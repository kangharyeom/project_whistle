import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

import * as l from '../../style/LoginStyle'

const Login = () => {
    const handleClickGoogleLogin = () => {
        const externalURL = 'http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
        window.location.href = externalURL;
    };

    const handleClick = () => {
        const externalURL = 'https://dev.dovfpqk67sdce.amplifyapp.com';
        window.location.href = externalURL;
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleLogin = async (e) => {
        const externalURL = 'https://dev.dovfpqk67sdce.amplifyapp.com';
        e.preventDefault();

        try {
            const response = await fetch('http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const authToken = data.token; // 가정: 서버에서 토큰을 'token' 필드로 응답한다고 가정
    
                // 토큰을 로컬 스토리지에 저장
                localStorage.setItem('authToken', authToken);
    
                console.log('로그인 성공!');
                window.location.href = externalURL;
            } else {
                console.error('로그인 실패!');
                alert('아이디와 비밀번호를 확인해주세요')
                window.location.href = externalURL+'/log-in';
                
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert('error')
        }
    };

    return (   
        <l.StyledLogin>
            <l.LoginContainer>
                <IconButton onClick={handleClick}>
                    <img width={240} src="/images/whistle-letter.png" alt="Whistle" />
                </IconButton>
                
                <l.LoginColumn>
                    <input
                        type="email" // 이메일 형식을 입력받을 때에는 type을 email로 지정하는 것이 좋습니다.
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="패스워드"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={handleLogin}>로그인</button>
                    <l.LoginKaKao>
                        <IconButton onClick={handleClick}>
                            <img width={200} src="/images/kakao.png" alt="Whistle" />
                        </IconButton>
                    </l.LoginKaKao>
                   
                    <l.LoginNaver>
                        <IconButton onClick={handleClick}>
                            <img width={200} src="/images/naver.png" alt="Whistle" />
                        </IconButton>
                    </l.LoginNaver>

                    <l.LoginGoogle>
                        <IconButton onClick={handleClickGoogleLogin}>
                            <img width={200} src="/images/google.png" alt="Whistle" />
                        </IconButton>
                    </l.LoginGoogle>
                </l.LoginColumn>

                <l.SignUp>
                    <Link to="/signup"> {/* react-router-dom의 Link 컴포넌트를 사용하여 회원가입 페이지로 이동 */}
                        회원가입
                    </Link>
                </l.SignUp>

                <l.LoginRow>
                    <l.LoginKaKao>
                        <IconButton onClick={handleClick}>
                            <img width={60} src="/images/kakao-small.png" alt="kakao" />
                        </IconButton>
                    </l.LoginKaKao>
                   
                    <l.LoginNaver>
                        <IconButton onClick={handleClick}>
                            <img width={60} src="/images/naver-small.png" alt="naver" />
                        </IconButton>
                    </l.LoginNaver>

                    <l.LoginGoogle>
                        <IconButton onClick={handleClick}>
                            <img width={70} src="/images/google-small.png" alt="Whistle" />
                        </IconButton>
                    </l.LoginGoogle>
                </l.LoginRow>
            </l.LoginContainer>
        </l.StyledLogin>
    );
}
  
export default Login;