import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import * as s from '../../style/SignUpSytle';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');

    const handleClick = () => {
        const externalURL = 'https://dev.dovfpqk67sdce.amplifyapp.com/';
        window.location.href = externalURL;
    };

    const handleSignUp = async () => {
        const externalURL = 'https://dev.dovfpqk67sdce.amplifyapp.com';
        try {
            const response = await fetch('http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/api/users/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    loginId: loginId,
                    password: password,
                    phone: phone,
                    position: position,
                }),
            });

            if (response.ok) {
                console.log('회원가입 성공!');
                alert("회원가입이 성공적으로 완료되었습니다.")
                window.location.href = externalURL+"/log-in"
            } else {
                console.error('회원가입 실패!');
                alert("잘못된 정보를 입력하였습니다.")
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert("에러가 발생했습니다.")
        }
    };

    return (   
        <s.StyledSignUp>
            <s.SignUpContainer>
                <IconButton onClick={handleClick}>
                    <img width={240} src="/images/whistle-letter.png" alt="Whistle" />
                </IconButton>
                
                <s.SignUpColumn>
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="아이디"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="패스워드"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="전화번호"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="포지션"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <button type="submit" onClick={handleSignUp}>회원가입</button>
                </s.SignUpColumn>
            </s.SignUpContainer>
        </s.StyledSignUp>
    );
};

export default SignUp;
