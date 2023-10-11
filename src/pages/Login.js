import React from 'react';

import IconButton from '@mui/material/IconButton';

import * as l from '../style/LoginStyle'

const Login = () => {
    const handleClick = () => {
        const externalURL = 'http://ec2-3-36-251-38.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
        window.location.href = externalURL;
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