import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SvgStyle } from '../../components/common/styled';
import { LogWrapper } from '../../components/styled/signUpStyled';

export default function SignUp() {

    const [nickName, setNickName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdConfirm, setPwdConfirm] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state.email;

    useEffect(() => {
        pwdCheck(pwd, pwdConfirm);
    }, [pwd, pwdConfirm]);

    // 유저 생성 API POST 
    const onClickAddUser = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_BASE_URL}/users`, {
            nickName: nickName,
            email: email,
            phoneNum: phoneNum,
            pwd: pwd,
            subGroup: "",
            workYear: "",
            interestIdx: 1
        })
        .then((res) => {
            if(res.data.code === 1000) {    // 회원가입 성공
                console.log(`/users ${res.data.message}`);
                alert('회원가입 성공')
                navigate('/');
            } else if(res.data.code !== 1000) {
                console.log(`/users ${res.data.code} ${res.data.message}`);
                alert(res.data.message);
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
            alert(error.message);
        })
    }

    const validateNickName = (nickName) => {    // 이름 유효성 검사. 특수문자, 공백 제외 문자
        const nameRegex =  /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
        return nameRegex.test(nickName);   // 형식에 맞으면 true 반환
    }

    const validatePhoneNum = (phoneNum) => {    // 전화번호 유효성 검사. 01(0,1,6-9)로 시작해서 뒤에 8개 숫자
        const phonNumRegex = /^(01[016-9])([0-9]{4})([0-9]{4})$/;
        return phonNumRegex.test(phoneNum);   
    }
    
    const validatePwd = (pwd) => {  // 비밀번호 유효성 검사. 특수문자 한 개 이상 포함 6~30 문자
        const pwdRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{6,30}$/; /* 특수문자가 최소 1개 이상 포함된 영어,숫자 조합의 6~30개의 글자 */ 
        return pwdRegex.test(pwd);
    }

    const pwdCheck = (pwd, pwdConfirm) => {
        if(pwd === pwdConfirm) return true;
        else return false;
    }

    const returnText = () => {
        if(!pwdCheck(pwd, pwdConfirm)){
            return (
                <p className='text-validate'>비밀번호가 서로 일치하지 않습니다.</p> 
            )
        }
        else {
            return(
                <p className='text-validate-confirm'>사용가능한 비밀번호입니다.</p>
            )
        }
    }    

    return (
        <LogWrapper>
            <div>
                <div className='box-signup'>
                    <div className='box-title-wrapper'>
                        <div className='btn-cancel-wrapper'>
                            <button onClick={() => {navigate(-1); alert('회원가입을 취소하고 이전 화면으로 되돌아갑니다. 계속하시겠어요?');}} type='button'>
                                <p>취소</p>
                            </button>
                        </div>
                        <div className='box-sign-title'>
                            <p>회원가입</p>
                        </div>
                        <div className='box-title-inner'></div>
                    </div>

                    <div className='box-content-wrapper'>
                        <form>
                            <div className='box-label-wrapper'>
                                <label for="email">이메일</label>
                            </div>
                            <input className='input-disabled' type="email" placeholder='이메일을 입력해주세요.' name='email' value={email} disabled/>
                            <div className='box-label-wrapper'>
                                <label for="userName">이름</label>
                            </div>
                            <input value={nickName} onChange={(e)=>setNickName(e.target.value)} 
                                    className={nickName && !validateNickName(nickName) ? 'input-form input-border-true' : 'input-form input-border-false'} type="text" placeholder='이름을 입력해주세요.' name='userName' />
                            {nickName && validateNickName(nickName) && <p className='text-validate'>이름에는 공백과 특수문자가 포함될 수 없습니다.</p>}
                            
                            <div className='box-label-wrapper'>
                                <label for="mobile">휴대폰 번호</label>
                            </div>
                            <div>
                                <div className='select-country-wrapper'>
                                    <select className="select-country">
                                        <option value="KR">South Korea +82</option>
                                        <option value="JP">Japan +81</option>
                                        <option value="TW">Taiwan +886</option>
                                        <option value="HK">Hong Kong +852</option>
                                        <option value="BE">Belgium +32</option>
                                        <option value="CN">China +86</option>
                                        <option value="US">United States +1</option>
                                    </select>
                                    <div className='select-arrow-wrapper'>
                                        <span>
                                            <SvgStyle viewBox="0 0 10 6"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z" fill="#333"></path></SvgStyle>
                                        </span>
                                    </div>
                                </div>
                                <div className='input-mobile-wrapper'>
                                    <input value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)} 
                                        className={phoneNum && validatePhoneNum(phoneNum) ? 'input-form input-border-true' : 'input-form input-border-false'} type="text" placeholder='(예시) 01013245668' name='mobile' />
                                    <button type='button' className={validatePhoneNum(phoneNum) ? 'btn-mobile-authentication-confirm' : 'btn-mobile-authentication'}>
                                        <span>인증번호 받기</span>
                                    </button>
                                </div>
                                {phoneNum && !validatePhoneNum(phoneNum) && <p className='text-validate'>올바른 전화번호를 입력해주세요.</p>}
                                <div className='input-authentication-wrapper'>
                                    <input className='input-disabled' type="text" placeholder='인증번호를 입력해주세요.' name='authCode' />
                                </div>

                            </div>
                            <div className='box-label-wrapper'>
                                <label for="password">비밀번호</label>
                            </div>
                            <input value={pwd} onChange={(e)=>setPwd(e.target.value)} 
                                className={pwd && validatePwd(pwd) ? 'input-form input-border-true' : 'input-form input-border-false'} type="password" placeholder='비밀번호를 입력해주세요.' name='password' />
                            {pwd && !validatePwd(pwd) && <p className='text-validate'>올바르지 않은 비밀번호입니다.</p>}
                            <input value={pwdConfirm} onChange={(e)=>setPwdConfirm(e.target.value)} 
                                className={pwdConfirm && pwdCheck(pwd, pwdConfirm) ? 'input-form input-border-true' : 'input-form input-border-false'} type="password" placeholder='비밀번호를 다시 입력해주세요.' name='password' />
                            {pwdConfirm && returnText()}
                            <p className='text-password-info'>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
                        
                            <div className='box-agree-wrapper'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content-all'>
                                    <p>전체 동의</p>
                                </div>
                            </div>
                            <hr className='hr-divider'/>
                            <div className='box-agree-list'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content'>
                                    <p>만 14세 이상입니다. (필수)</p>
                                </div>
                            </div>
                            <div className='box-agree-list'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content'>
                                    <p>OneID 및 원티드 이용 약관 동의 (필수)</p>
                                </div>
                                <a className='link-agree-more'>자세히</a>
                            </div>
                            <div className='box-agree-list'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content'>
                                    <p>OneID 개인정보 수집 및 이용 동의 (필수)</p>
                                </div>
                                <a className='link-agree-more'>자세히</a>
                            </div>
                            <div className='box-agree-list'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content'>
                                    <p>원티드 개인정보 수집 및 이용 동의 (필수)</p>
                                </div>
                                <a className='link-agree-more'>자세히</a>
                            </div>
                            <div className='box-agree-list'>
                                <div className='box-agree-check'></div>
                                <input className='input-checkbox' type="checkbox" />
                                <div className='text-agree-content'>
                                    <p>채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</p>
                                </div>
                            </div>
                            <div className='check-info-list'>
                                <label>
                                    <input type="checkbox" />
                                    <span>
                                        <svg viewBox="0 0 12 8"><path d="M1.5 4L4.5 7L10.5 1" stroke="#ccc" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                    
                                    </span>
                                    <p>이메일</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>
                                        <svg viewBox="0 0 12 8"><path d="M1.5 4L4.5 7L10.5 1" stroke="#ccc" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                    
                                    </span>
                                    <p>앱 푸시</p>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>
                                        <svg viewBox="0 0 12 8"><path d="M1.5 4L4.5 7L10.5 1" stroke="#ccc" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>                                    
                                    </span>
                                    <p>문자 메시지</p>
                                </label>
                            </div>

                            <div className='btn-add-wrapper'>
                                <div></div>
                                <div></div>
                                <button className={nickName && phoneNum && pwd && pwdCheck(pwd, pwdConfirm) ? 'btn-add-user-active' :'btn-add-user'} onClick={onClickAddUser} type='submit'>
                                    <span>가입하기</span>
                                </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </LogWrapper>
    )
}