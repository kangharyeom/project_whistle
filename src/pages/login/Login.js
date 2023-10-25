import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';

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
                localStorage.setItem('authToken', authToken);
                const responseData = await response.json(); // 응답 데이터를 JSON 형태로 파싱
                const userId = responseData.userId; // 응답에서 userId 값을 가져옴
                localStorage.setItem('userId', userId); // userId 값을 localStorage에 저장
                
                console.log('토큰 값:', authToken);
                console.log('유저 ID:', userId);
                
                console.log('로그인 성공!');
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
            <l.LoginContainer>
                <l.LoginBody>
                    <IconButton onClick={handleClick}>
                        <img width={180} src="/images/whistle-letter.png" alt="Whistle" />
                    </IconButton>
                    
                    <l.LoginColumn>
                        <l.LoginIdandPassword>
                        <input
                            size = "24"
                            type="email" // 이메일 형식을 입력받을 때에는 type을 email로 지정하는 것이 좋습니다.
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color = '#76a6cc'
                            />
                        <input
                            size = "24"
                            type="password"
                            placeholder="패스워드"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <button type="submit" onClick={handleLogin}>로그인</button>
                        </l.LoginIdandPassword>
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
                                <img width={210} src="/images/google.png" height={50} alt="Whistle" />
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
                                <img width={44} src="/images/kakao-small.png" alt="kakao" />
                            </IconButton>
                        </l.LoginKaKao>
                    
                        <l.LoginNaver>
                            <IconButton onClick={handleClick}>
                                <img width={44} src="/images/naver-small.png" alt="naver" />
                            </IconButton>
                        </l.LoginNaver>

                        <l.LoginGoogle>
                            <IconButton onClick={handleClick}>
                                <img width={50} src="/images/google-small.png" alt="Whistle" />
                            </IconButton>
                        </l.LoginGoogle>
                    </l.LoginRow>
                </l.LoginBody>
            </l.LoginContainer>
        </l.StyledLogin>
    );
}
  
export default Login;