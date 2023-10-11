import React from 'react';

import IconButton from '@mui/material/IconButton';

import * as l from '../style/LoginStyle'

const Login = () => {

    const handleClick = () => {
    // 클릭 시 "/matching" 페이지로 이동
    };

    return (   
        <l.StyledLogin>
            <l.LoginContainer>
                <IconButton onClick={handleClick}>
                    <img width={240} src="/images/whistle-letter.png" alt="Whistle" />
                </IconButton>
                
                <l.LoginColumn>
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
                        <IconButton onClick={handleClick}>
                            <img width={200} src="/images/google.png" alt="Whistle" />
                        </IconButton>
                    </l.LoginGoogle>
                </l.LoginColumn>

                <l.SignUp>
                    회원가입
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