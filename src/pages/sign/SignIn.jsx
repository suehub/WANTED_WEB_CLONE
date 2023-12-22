import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { logState } from '../../recoil/logState';

export default function SignIn() {

    const [userRecoilData, setUserRecoilData] = useRecoilState(logState);     // 로그인한 사용자의 데이터 (userIdx, jwt)
    const [pwd, setPwd] = useState('');
    const [pwdCheck, setPwdCheck] = useState(true);

    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(userRecoilData);
    }, [userRecoilData]);

    // 유저 로그인 API POST 
    const onClickLogIn = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_BASE_URL}/users/logIn`, {
            email: email,
            pwd: pwd
        })
        .then((res) => {
            if(res.data.code === 1000) {    // 회원가입 성공
                console.log(`/users ${res.data.message}`);
                setUserRecoilData(res.data.result);
                alert('로그인 성공');
                navigate('/');
            } else if(res.data.code === 3014){
                setPwdCheck(false);
                console.log(`/users ${res.data.code} ${res.data.message}`);
            } else if(res.data.code !== 1000) {
                // alert(res.data.message);
                console.log(`/users ${res.data.code} ${res.data.message}`);
            }
        })
        .catch((error) => {
            if (error.response) { // 요청 전송
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) { // 요청은 전송. 응답 수신되지 않음 
              console.log(error.request);
            } else { // 오류가 발생한 요청을 설정하는 동안 문제가 발생
              console.log('Error', error.message);
            }
            console.log(error.config);  // 오류를 발생시키는 HTTP 코드를 정의
        })
    }

    return (
        <Container>
            <div>
                <div>
                    <div className='box-title-wrapper'>
                        <div className='btn-cancel-wrapper'>
                            <button onClick={() => navigate(-1)}  type='button'>
                                <span>
                                    <svg viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></svg>
                                </span>
                            </button>
                        </div>
                        <div className='box-signin-title'>
                            <p>이메일로 로그인</p>
                        </div>
                        <div className='box-title-right'></div>
                    </div>

                    <div className='box-content-wrapper'>
                        <form>
                            <div className='box-label-wrapper'>
                                <label for="password">비밀번호</label>
                            </div>
                            <input value={pwd} onChange={(e)=>setPwd(e.target.value)} className={pwdCheck ? 'input-form' : 'input-form input-form-red'} type="password" placeholder='비밀번호를 입력해주세요.' name='password' />
                            {pwd && !pwdCheck && <p className='box-content-info'>비밀번호가 일치하지 않습니다.</p>}
                            <button onClick={onClickLogIn} className={pwd && pwdCheck ? 'btn-login btn-login-next' : 'btn-login btn-login-next-disabled'} type='submit'>
                                <span>다음</span>
                            </button>
                            <button className='btn-pwd-update' type='button'>
                                <span>비밀번호 초기화/변경</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    * {
    font-family: 'Pretendard Std', 'Pretendard';
    }
    width: 100%;
    height: 100%;
    margin: 10% auto;
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    > div{
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    > div > div{
        border-radius: 5px;
        width: 100%;
        max-height: calc(100vh - 100px);
        overflow: auto;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border: 1px solid #e1e2e3;
    }

    .box-title-wrapper{
        padding: 0 20px;
        height: 64px;
        flex: none;
        max-width: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .btn-cancel-wrapper{
        min-width: 64px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 400;
        font-size: 17px;
    }
    .btn-cancel-wrapper > button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 8px;
        margin: -8px;
        fill: #000;
    }
    .btn-cancel-wrapper > button > span{
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
    .btn-cancel-wrapper > button > span > svg{
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        font-size: 20px;
    }
    .box-signin-title{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .box-signin-title > p{
        color: #000;
        font-weight: 600;
        text-align: center;
        letter-spacing: -0.002em;
        font-size: 18px;
        line-height: 26px;
        display: flex;
        flex: 1 1 0%;
        justify-content: center;
        align-items: center;
    }
    .box-title-right{
        display: flex;
        min-width: 64px;
        justify-content: flex-end;
        align-items: center;
    }

    .box-content-wrapper{
        overflow: auto;
        position: relative;
        padding: 20px;
    }
    .box-label-wrapper{
        margin: 17px 0px 7px;
    }
    .box-label-wrapper > label{
        color: #888;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0145em;
        font-size: 14px;
        line-height: 20px;
    }
    .input-form{
        width: 332px;
        height: 50px;
        min-height: 50px;
        padding: 0px 12px;
        outline: none;
        background-color: transparent;
        border: 1px solid #e1e2e3;
        color: #333;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    .input-form:focus{
        border: 1px solid #36f;
    }
    .input-form-red:focus{
        border: 1px solid #fe415c
    }
    .input-form::placeholder{
        color: #ccc;
    }
    .box-content-info{
        color: #fe415c;
        font-weight: 400;
        text-align: left;
        letter-spacing: 0.0192em;
        font-size: 13px;
        line-height: 18px; 
        margin-bottom: 8px;
        margin-top: 0px;
    }

    .btn-login{
        width: 100%;
        height: 50px;
        min-height: 50px;
        border-radius: 25px;
        font-size: 16px;
        margin-bottom: 10px;
        margin-top: 30px;
        border: none;
    }
    .btn-login-next-disabled{
        color: #ccc;
        background-color: #f2f4f7;
        cursor: default;        
    }
    .btn-login-next-disabled > span {
        color: #ccc;
    }
    .btn-login-next{
        color: #ccc;
        background-color: #36f;
        cursor: pointer;   
    }
    .btn-login-next > span{
        color #fff;
    }

    .btn-pwd-update{
        width: 100%;
        height: 50px;
        min-height: 50px;
        border-radius: 25px;
        font-size: 16px;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: #fff;
        border: none;
        margin-top: 10px;
    }
    .btn-pwd-update > span{
        color: #36f;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0145em;
        font-size: 14px;
        line-height: 20px;
    }
`;