import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogWrapper } from '../../components/styled/logStyled';
import { SvgStyled } from '../../components/styled/logStyled';

export default function Login() {

  const [email, setEmail] = useState('');
  const [emailDisabled, setEmailDisabled] = useState(false);    // input 안의 이메일 존재 여부

  const navigate = useNavigate();
  
  useEffect(() => {
    setEmailDisabled(email);
  }, [email]);

  // 이메일 중복체크 GET API (가입여부 확인), 중복 여부에 따라 로그인 페이지 이동 or 회원가입 페이지 이동
  const duplicateCheckEmail = async (e) => {
    e.preventDefault();
    await axios.get(`${process.env.REACT_APP_BASE_URL}/users/sign-up/${email}`)
    .then((res) => {
      if(res.data.code === 1000){
        console.log(`users/sign-up ${res.data.message}`);
        console.log(`result: ${res.data.result} (0: 가입된 정보 없음, 1: 가입되어 있음)`);
        if(res.data.result){
          navigate('/signin', {state: {email: email}});
        }  else {
          navigate('/signup', {state: {email: email}});
        }
      }
      else{
        console.log(res.data.message);
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

  const validateEmail = (email) => {  // email 유효성 검사
    const emailRegex = 
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);   // 형식에 맞으면 true 반환. text() : 문자열에 일치하는 부분이 있는지 확인하고, true 혹은 false를 return
  }

  const removeWhitespace = (text) => {    // 공백제거
    const regex = /\s/g;
    return text.replace(regex, '');
  }

  const handleEmailChange = (email) => {  // 공백제거 적용
    const ChangedEmail = removeWhitespace(email);
    setEmail(ChangedEmail);
  }


  return (
    <LogWrapper>
      <div>
        <div className='box-log'>

          <div className='box-title-wrapper'>
            <div className='box-log-title'>
              <span>
                <SvgStyled viewBox="0 0 343 43"><path d="M9.36401 41H17.4851L23.6023 21.8047L29.7722 41H37.8933L46.9636 12.5234H38.8425L33.5691 30.8223L27.3992 12.5234H19.8054L13.6355 30.8223L8.36206 12.5234H0.240967L9.36401 41ZM46.9109 26.709C46.9109 34.1182 51.6042 41.6855 60.78 41.6855C63.9177 41.7119 66.6072 40.8154 68.7957 39.2598V41H76.2312V12.5234H68.7957V14.2637C66.6072 12.708 63.9177 11.8115 60.78 11.8379C51.6042 11.8379 46.9109 19.2998 46.9109 26.709ZM54.1355 26.709C54.1091 21.6201 57.5896 18.7197 61.6238 18.6934C65.6052 18.7197 68.7429 21.541 68.7429 26.6562C68.7429 31.7979 65.6052 34.8037 61.6238 34.7773C57.4578 34.8037 54.1091 31.7979 54.1355 26.709ZM80.7664 41H88.4656V24.5996C88.4656 21.3037 90.3904 18.7197 93.7917 18.6934C97.4568 18.7197 99.0125 21.1982 99.0125 24.3887V41H106.712V23.0176C106.712 16.7949 103.495 11.7588 96.4285 11.7324C93.4226 11.7588 90.074 13.0508 88.3074 15.8457V12.5234H80.7664V41ZM108.927 19.3262H114.094V32.5625C114.094 38.0996 117.549 41.6855 123.112 41.6855C125.353 41.6855 126.751 41.29 127.436 41V34.3027C127.041 34.4609 125.986 34.5664 125.063 34.5664C122.875 34.5664 121.741 33.749 121.741 31.2441V19.3262H127.436V12.5234H121.741V2.97852L114.2 6.14258V12.5234H108.927V19.3262ZM129.968 26.7617C129.968 34.9619 135.215 41.7119 143.837 41.6855C150.112 41.7119 154.647 38.0996 156.651 32.8789L149.796 31.4551C148.662 33.9072 146.579 35.5156 143.837 35.5156C140.172 35.5156 137.693 32.6416 137.087 28.7656H157.6C157.679 28.1064 157.706 27.4473 157.706 26.7617C157.706 18.0605 151.984 11.8379 143.837 11.8379C135.373 11.8379 129.968 18.5352 129.968 26.7617ZM137.456 23.4395C138.405 20.6445 140.673 18.6934 143.837 18.6934C147.001 18.6934 149.295 20.6445 150.27 23.4395H137.456ZM160.237 26.709C160.237 34.9883 165.484 41.7119 174.106 41.6855C177.244 41.7119 179.933 40.7891 182.122 39.2598V41L189.505 41.0527V0.0253906L181.964 2.97852V14.1582C179.643 12.6025 176.901 11.8379 174.106 11.8379C165.616 11.8379 160.237 18.4033 160.237 26.709ZM167.409 26.709C167.409 21.5938 170.889 18.7197 174.897 18.6934C178.931 18.7197 182.043 21.541 182.069 26.6035C182.043 31.7979 178.931 34.8037 174.897 34.7773C170.784 34.8037 167.409 31.7979 167.409 26.709Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M217.931 42.0547C226.711 42.0547 233.118 35.6211 233.118 26.7617C233.118 17.9023 226.711 11.4688 217.931 11.4688C209.15 11.4688 202.743 17.9023 202.743 26.7617C202.743 35.6211 209.15 42.0547 217.931 42.0547ZM210.337 26.7617C210.337 21.8838 213.527 18.3242 217.931 18.3242C222.334 18.3242 225.524 21.8838 225.524 26.7617C225.524 31.6396 222.334 35.1992 217.931 35.1992C213.527 35.1992 210.337 31.6396 210.337 26.7617Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M243.429 41V24.125C243.481 21.0928 245.802 18.5352 248.966 18.5352C252.42 18.5352 254.187 20.8291 254.187 24.7578V41H261.78V22.6484C261.78 15.6875 257.825 11.4688 251.655 11.4688C248.201 11.4688 245.327 13.1035 243.429 15.793V12.5234H235.835V41H243.429Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M264.497 26.7617C264.497 35.6211 270.746 42.0547 279.315 42.0547C285.433 42.0547 290.442 38.8643 292.868 33.248L285.538 31.4551C284.325 33.8018 282.137 35.1992 279.315 35.1992C275.545 35.1992 272.908 32.7207 272.249 28.7656H294.028C294.081 28.1064 294.134 27.4473 294.134 26.7617C294.107 17.9023 287.885 11.4688 279.315 11.4688C270.746 11.4688 264.497 17.9023 264.497 26.7617ZM272.592 23.4922C273.066 20.5654 275.519 18.3242 279.315 18.3242C283.06 18.3242 285.485 20.5654 286.013 23.4922H272.592Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M297.273 2.82031V41H304.866V2.82031H297.273Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M309.693 41H322.243C334.794 41 342.256 33.5117 342.282 21.9102C342.256 10.335 334.821 2.82031 322.296 2.82031H309.693V41ZM317.286 34.0391V9.78125H322.296C330.206 9.78125 334.662 14.5537 334.689 21.9102C334.662 29.293 330.18 34.0391 322.243 34.0391H317.286Z" fill="#333"></path></SvgStyled>
              </span>
            </div>
          </div>

          <div className='box-content-wrapper'>
            <form>
              <h1>나다운 일의 시작, 원티드</h1>
              <h2>
                취업, 이직, 커리어 콘텐츠까지
                <br />
                커리어 성장의 모든 것
              </h2>

              <div className='box-label-wrapper'>
                <label for="email">이메일</label>
              </div>
              <input value={email} onChange={(e) => {setEmail(e.target.value); handleEmailChange(e.target.value);}} className={emailDisabled && validateEmail(email) ? 'input-email' : 'input-email-false'} type="email" placeholder="이메일을 입력해주세요." name="email" />
              {emailDisabled && (!validateEmail(email)) && <p className='text-email-validate'>올바른 이메일을 입력해주세요.</p>}
              <button onClick={duplicateCheckEmail} className={validateEmail(email) ? 'btn-login' : 'btn-login-disabled'} type='submit'>
                <span>이메일로 계속하기</span>
              </button>

              <p className='text-login-type'>또는</p>

              <div className='box-social-wrapper'>
                <button className='btn-social-login' type='button'>
                  <span>
                    <SvgStyled viewBox="0 0 57 56"><path d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z" fill="black"></path><path d="M28.8182 19.359C30.0068 19.359 31.4968 18.5307 32.384 17.4264C33.1876 16.4256 33.7736 15.0279 33.7736 13.6302C33.7736 13.4404 33.7568 13.2506 33.7233 13.0953C32.4008 13.147 30.8104 14.0098 29.8561 15.1659C29.1028 16.046 28.4164 17.4264 28.4164 18.8413C28.4164 19.0484 28.4499 19.2555 28.4666 19.3245C28.5503 19.3418 28.6843 19.359 28.8182 19.359ZM24.6329 40.2381C26.2568 40.2381 26.9767 39.1165 29.0023 39.1165C31.0615 39.1165 31.5135 40.2036 33.3215 40.2036C35.0961 40.2036 36.2847 38.5126 37.4064 36.8561C38.6619 34.958 39.1809 33.0944 39.2144 33.0081C39.0972 32.9736 35.6988 31.5414 35.6988 27.5209C35.6988 24.0352 38.3773 22.465 38.528 22.3442C36.7535 19.7214 34.0581 19.6524 33.3215 19.6524C31.3294 19.6524 29.7055 20.8947 28.6843 20.8947C27.5794 20.8947 26.1229 19.7214 24.3986 19.7214C21.1173 19.7214 17.7858 22.5168 17.7858 27.7969C17.7858 31.0755 19.0247 34.5438 20.5481 36.787C21.8539 38.6851 22.9923 40.2381 24.6329 40.2381Z" fill="white"></path></SvgStyled>
                  </span>
                  <p>Apple</p>
                </button>
                <button className='btn-social-login' type='button'>
                  <span>
                    <SvgStyled viewBox="0 0 57 56"><path d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z" fill="#1877F2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 14.2855C20.9256 14.2855 14.7857 20.4253 14.7857 27.9997C14.7857 34.8445 19.801 40.5181 26.3578 41.5467V31.9645H22.8744V27.9997H26.3578V24.9785C26.3578 21.5417 28.404 19.6423 31.5377 19.6423C33.038 19.6423 34.607 19.9111 34.607 19.9111V23.2848H32.8776C31.1743 23.2848 30.6422 24.3421 30.6422 25.4269V27.9997H34.4465L33.839 31.9645H30.6422V41.5467C37.199 40.5181 42.2143 34.8445 42.2143 27.9997C42.2143 20.4253 36.0744 14.2855 28.5 14.2855Z" fill="#fff"></path></SvgStyled>
                  </span>
                  <p>Facebook</p>
                </button>
                <button className='btn-social-login' type='button'>
                  <span>
                    <SvgStyled viewBox="0 0 57 56"><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6657 28.3122C41.6657 27.34 41.5789 26.4044 41.4158 25.5068H28.5V30.8112H35.8813C35.5629 32.5255 34.5968 33.9792 33.1446 34.9514V38.3922H37.5758C40.1693 36.0044 41.6657 32.4889 41.6657 28.3122Z" fill="#3D82F0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5003 41.7146C32.2032 41.7146 35.3072 40.4864 37.5761 38.3927L33.1449 34.9504C31.9167 35.7733 30.3457 36.2594 28.5003 36.2594C24.9285 36.2594 21.9053 33.8472 20.8264 30.606H16.2443V34.1595C18.5011 38.6411 23.1396 41.7146 28.5003 41.7146Z" fill="#31A752"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8261 30.606C20.5518 29.7831 20.3964 28.9039 20.3964 28.0002C20.3964 27.0966 20.5518 26.2174 20.8261 25.3945V21.841H16.244C15.316 23.6924 14.7857 25.7877 14.7857 28.0002C14.7857 30.2128 15.316 32.3081 16.244 34.1595L20.8261 30.606Z" fill="#F9BA00"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5003 19.7407C30.5133 19.7407 32.322 20.4325 33.7422 21.7917L37.6767 17.8588C35.3011 15.6447 32.1971 14.2855 28.5003 14.2855C23.1396 14.2855 18.5011 17.359 16.2443 21.842L20.8264 25.394C21.9053 22.1529 24.9285 19.7407 28.5003 19.7407Z" fill="#E64234"></path></SvgStyled>                  </span>
                  <p>Google</p>
                </button>
                <button className='btn-social-login' type='button'>
                  <span>
                    <SvgStyled viewBox="0 0 57 56"><path d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z" fill="#FEE500"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z" fill="#181600"></path></SvgStyled>                  </span>
                  <p>Kakao</p>
                </button>
              </div>

              <hr />
              
              <div className='box-info-wrapper'>
                <a href='https://id.wanted.jobs/terms/ko'>이용약관</a>
                <a href='https://id.wanted.jobs/privacy/ko'>개인정보처리방침</a>
              </div>

              <p className='text-copyright'>© Wantedlab, Inc.</p>

              <div className='box-language-wrapper'>
                <div>
                  <img src="https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg" alt='' />
                  <div className='box-select-wrapper'>
                    <select>
                      <option value='ko_KR'>한국어</option>
                      <option value='en_US'>English</option>
                      <option value='ja'>日本語</option>
                    </select>
                    <div className='arrow-select-inside'>
                      <span>
                        <SvgStyled viewBox="0 0 10 6"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z" fill="#333"></path></SvgStyled>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LogWrapper>
  )
}