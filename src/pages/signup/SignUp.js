import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
                    <IconButton onClick={handleClick} style={{ height: '10%', width: '30%', marginBottom: '8%' }}>
                            <img style={{display: 'flex', justifyContent: 'center', width: '100%', height: '100%', objectFit: 'cover'}} src="/images/whistle.png" alt="Whistle"/>
                    </IconButton>
                    <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="이메일" value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="이름" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                    <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="아이디" value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
                    <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    <TextField size="small" sx={{ height: '10%' }} required id="outlined-required" label="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} type="text"/>
                    <Button sx={{width:'100%', marginTop: '8%'}}variant="contained" size="small" type="submit" onClick={handleSignUp}> 회원가입 </Button>
                </s.SignUpColumn>
                </s.SignUpBody>
            </s.SignUpContainer>
        </s.StyledSignUp>
    );
};

export default SignUp;
