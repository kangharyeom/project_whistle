import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import * as s from '../../style/SignUpSytle';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const basicURL = process.env.REACT_APP_API_ENDPOINT;

    const handleClick = () => {
        window.location.href = basicURL;
    };

    const handleSignUp = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_SERVER_API_ENDPOINT+'/api/users/join', {
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
                }),
            });

            if (response.ok) {
                console.log('회원가입 성공!');
                alert("회원가입이 성공적으로 완료되었습니다.")
                window.location.href = basicURL+"/log-in"
            } else {
                console.error('회원가입 실패!');
                alert("잘못된 정보를 입력하였습니다.")
                window.location.href = basicURL+"/signup"
            }
        } catch (error) {
            console.error('에러 발생:', error);
            alert("에러가 발생했습니다.")
        }
    };

    return (   
        <s.StyledSignUp id = 'StyledSignUp'>
            <s.SignUpContainer id = 'SignUpContainer'>
                <s.SignUpBody id = 'SignUpBody'>
                <s.SignUpColumn id = 'SignUpColumn' style={{ display: 'flex', flexDirection: 'column' }}>
                <IconButton onClick={handleClick} style={{ height: '100px', width: '100px' }}>
                    <div style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '100%', 
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0.1, 0.2)',
                        marginBottom: '50%'
                    }}>
                        <img
                            style={{
                                display: 'flex', 
                                justifyContent: 'center',
                                width: '60%', 
                                height: '60%', 
                                objectFit: 'cover' 
                            }}
                            src="/images/whistle.png"
                            alt="Whistle"
                        />
                    </div>
                </IconButton>
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        marginBottom: '10%',
                        height: '6%',
                        backgroundColor: '#cae7ff',
                        borderRadius: '5px' // 테두리를 5px로 설정하여 둥글게 만듭니다.
                    }}
                />
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        marginBottom: '10%',
                        height: '6%',
                        backgroundColor: '#cae7ff',
                        borderRadius: '5px' // 테두리를 5px로 설정하여 둥글게 만듭니다.
                    }}
                />
                <input
                    type="text"
                    placeholder="아이디"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    style={{
                        marginBottom: '10%',
                        height: '6%',
                        backgroundColor: '#cae7ff',
                        borderRadius: '5px' // 테두리를 5px로 설정하여 둥글게 만듭니다.
                    }}
                />
                <input
                    type="password"
                    placeholder="패스워드"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        marginBottom: '10%',
                        height: '6%',
                        backgroundColor: '#cae7ff',
                        borderRadius: '5px' // 테두리를 5px로 설정하여 둥글게 만듭니다.
                    }}
                />
                <input
                    type="text"
                    placeholder="전화번호"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                        marginBottom: '10%',
                        height: '6%',
                        backgroundColor: '#cae7ff',
                        borderRadius: '5px' // 테두리를 5px로 설정하여 둥글게 만듭니다.
                    }}
                />
                    <button type="submit" onClick={handleSignUp}>회원가입</button>
                </s.SignUpColumn>
                </s.SignUpBody>
            </s.SignUpContainer>
        </s.StyledSignUp>
    );
};

export default SignUp;
