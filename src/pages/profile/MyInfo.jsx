import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logState } from '../../recoil/logState';
import { Container } from '../../components/styled/myInfoStyled';
import { Modal } from '../../components/styled/myInfoStyled';
import { ToastMessage } from '../../components/styled/myInfoStyled';
import { DeleteModal } from '../../components/styled/myInfoStyled';

export default function MyInfo() {

    const [userRecoilData, setuserRecoilData] = useRecoilState(logState);

    const [profileData, setProfileData] = useState({});

    const [isTelModal, setIsTelModal] = useState(false);
    const [isTelChange, setIsTelChange] = useState(false);
    const [tel, setTel] = useState('');

    const [isPwdModal, setIsPwdModal] = useState(false);
    const [pwd, setPwd] = useState('');
    const [pwdConfirm, setPwdConfirm] = useState('');
    const [nowPwd, setNowPwd] = useState('');

    const [isNameModal, setIsNameModal] = useState(false);
    const [name, setName] = useState('');

    const[isDeleteModal, setIsDeleteModal] = useState(false);
    const [isToast, setIsToast] = useState(false);

    const navigate = useNavigate();

    const jwt = userRecoilData.jwt;
    const userIdx = userRecoilData.userIdx;
    const phoneNum = tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);


    useEffect(() => {
        getUserData();
    }, []);


    // 마이페이지 API
    const getUserData = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/users/my-profile/${userIdx}`,{
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/my-profile ${res.data.message}`);
            setProfileData(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/users/my-profile ${res.data.message}`);
        }
        // console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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


    // 전화번호 변경 API
    const patchPhoneNum = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userIdx}/phone`, telData ,{
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/:userIdx/phone ${res.data.message}`);
            setTel(tel);
            setIsTelModal(false);
            setIsToast(true);
            getUserData({phoneNum: tel})
        } else if(res.data.code !== 1000) {
            console.log(`/users/:userIdx/phone ${res.data.message}`);
        }
        console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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

    // 비밀번호 변경 API
    const patchPwd = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userIdx}/pwd`, pwdData, {
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/:userIdx/pwd ${res.data.message}`);
            setIsPwdModal(false);
            setIsToast(true);
            getUserData({pwd: pwd});
        } else if(res.data.code !== 1000) {
            console.log(`/users/:userIdx/pwd ${res.data.message}`);
        }
        console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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

    // 이름 변경 API
    const patchName = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/${userIdx}/name`, nameData, {
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/:userIdx/name ${res.data.message}`);
            setIsNameModal(false);
            setIsToast(true);
            getUserData({nickName: name});
        } else if(res.data.code !== 1000) {
            console.log(`/users/:userIdx/name ${res.data.message}`);
        }
        console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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

    // 회원탈퇴 API
    const onClickdeletUser = async (e) => {
        e.preventDefault();
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/my-profile/${userIdx}/delete`, {
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/my-profile/:userIdx/delete ${res.data.message}`);
            setIsDeleteModal(false);
            setuserRecoilData({userIdx: 1, nickName: "", profileImgUrl: "", jwt: ""});
            alert('회원탈퇴 되었습니다.');
            navigate('/');
        } else if(res.data.code !== 1000) {
            console.log(`/users/my-profile/:userIdx/delete ${res.data.message}`);
        }
        console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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

    const onClickLogOut = () => { // 로그아웃
        setuserRecoilData({
            userIdx: 1,
            nickName: "",
            profileImgUrl: "",
            jwt: ""
        });
        alert('로그아웃');
        navigate('/');
    }

    const onClickIsTelModal = () => {   // 전화번호 모달 창
        setIsTelModal(!isTelModal);
        setIsTelChange(false);
        setTel('');
    }

    const onClickIsPwdModal = () => {   // 비밀번호 모달 창
        setIsPwdModal(!isPwdModal);
        setNowPwd('');
        setPwd('');
        setPwdConfirm('');
    }

    const onClickIsNameModal = () => {  // 이름 모달 창
        setIsNameModal(!isNameModal);
        setName('');
    }

    const onClickTelChange = (e) => {   // 전화번호 변경 버튼 active
        e.preventDefault();
        setIsTelChange(true);
    }

    const telData = {   // phoneNum patch body data
        'userIdx': userIdx,
        'phoneNum': phoneNum
    };

    const pwdData = {   // pwd patch body data
        'userIdx': userIdx,
        'pwd': pwd
    };

    const nameData = {  // name patch body data
        'userIdx' : userIdx,
        'nickName' : name
    };

    const validateNickName = (name) => {    // 이름 유효성 검사. 특수문자, 공백 제외 문자
        const nameRegex =  /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
        return nameRegex.test(name);   // 형식에 맞으면 true 반환
    }

    const validatePhoneNum = (tel) => {    // 전화번호 유효성 검사. 01(0,1,6-9)로 시작해서 뒤에 8개 숫자
        const phonNumRegex = /^(01[016-9])([0-9]{4})([0-9]{4})$/;
        return phonNumRegex.test(tel);   
    }
    
    const validatePwd = (pwd) => {  // 비밀번호 유효성 검사. 특수문자 한 개 이상 포함 6~30 문자
        const pwdRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{6,30}$/;   // 특수문자가 최소 1개 이상 포함된 영어,숫자 조합의 6~30개의 글자 
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
        <>
        <Container>
            <div className='header-wrapper'>
                <div>
                    <Link to='/'>
                        <span className='home-logo'>
                            <svg viewBox="0 0 343 43"><path d="M9.36401 41H17.4851L23.6023 21.8047L29.7722 41H37.8933L46.9636 12.5234H38.8425L33.5691 30.8223L27.3992 12.5234H19.8054L13.6355 30.8223L8.36206 12.5234H0.240967L9.36401 41ZM46.9109 26.709C46.9109 34.1182 51.6042 41.6855 60.78 41.6855C63.9177 41.7119 66.6072 40.8154 68.7957 39.2598V41H76.2312V12.5234H68.7957V14.2637C66.6072 12.708 63.9177 11.8115 60.78 11.8379C51.6042 11.8379 46.9109 19.2998 46.9109 26.709ZM54.1355 26.709C54.1091 21.6201 57.5896 18.7197 61.6238 18.6934C65.6052 18.7197 68.7429 21.541 68.7429 26.6562C68.7429 31.7979 65.6052 34.8037 61.6238 34.7773C57.4578 34.8037 54.1091 31.7979 54.1355 26.709ZM80.7664 41H88.4656V24.5996C88.4656 21.3037 90.3904 18.7197 93.7917 18.6934C97.4568 18.7197 99.0125 21.1982 99.0125 24.3887V41H106.712V23.0176C106.712 16.7949 103.495 11.7588 96.4285 11.7324C93.4226 11.7588 90.074 13.0508 88.3074 15.8457V12.5234H80.7664V41ZM108.927 19.3262H114.094V32.5625C114.094 38.0996 117.549 41.6855 123.112 41.6855C125.353 41.6855 126.751 41.29 127.436 41V34.3027C127.041 34.4609 125.986 34.5664 125.063 34.5664C122.875 34.5664 121.741 33.749 121.741 31.2441V19.3262H127.436V12.5234H121.741V2.97852L114.2 6.14258V12.5234H108.927V19.3262ZM129.968 26.7617C129.968 34.9619 135.215 41.7119 143.837 41.6855C150.112 41.7119 154.647 38.0996 156.651 32.8789L149.796 31.4551C148.662 33.9072 146.579 35.5156 143.837 35.5156C140.172 35.5156 137.693 32.6416 137.087 28.7656H157.6C157.679 28.1064 157.706 27.4473 157.706 26.7617C157.706 18.0605 151.984 11.8379 143.837 11.8379C135.373 11.8379 129.968 18.5352 129.968 26.7617ZM137.456 23.4395C138.405 20.6445 140.673 18.6934 143.837 18.6934C147.001 18.6934 149.295 20.6445 150.27 23.4395H137.456ZM160.237 26.709C160.237 34.9883 165.484 41.7119 174.106 41.6855C177.244 41.7119 179.933 40.7891 182.122 39.2598V41L189.505 41.0527V0.0253906L181.964 2.97852V14.1582C179.643 12.6025 176.901 11.8379 174.106 11.8379C165.616 11.8379 160.237 18.4033 160.237 26.709ZM167.409 26.709C167.409 21.5938 170.889 18.7197 174.897 18.6934C178.931 18.7197 182.043 21.541 182.069 26.6035C182.043 31.7979 178.931 34.8037 174.897 34.7773C170.784 34.8037 167.409 31.7979 167.409 26.709Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M217.931 42.0547C226.711 42.0547 233.118 35.6211 233.118 26.7617C233.118 17.9023 226.711 11.4688 217.931 11.4688C209.15 11.4688 202.743 17.9023 202.743 26.7617C202.743 35.6211 209.15 42.0547 217.931 42.0547ZM210.337 26.7617C210.337 21.8838 213.527 18.3242 217.931 18.3242C222.334 18.3242 225.524 21.8838 225.524 26.7617C225.524 31.6396 222.334 35.1992 217.931 35.1992C213.527 35.1992 210.337 31.6396 210.337 26.7617Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M243.429 41V24.125C243.481 21.0928 245.802 18.5352 248.966 18.5352C252.42 18.5352 254.187 20.8291 254.187 24.7578V41H261.78V22.6484C261.78 15.6875 257.825 11.4688 251.655 11.4688C248.201 11.4688 245.327 13.1035 243.429 15.793V12.5234H235.835V41H243.429Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M264.497 26.7617C264.497 35.6211 270.746 42.0547 279.315 42.0547C285.433 42.0547 290.442 38.8643 292.868 33.248L285.538 31.4551C284.325 33.8018 282.137 35.1992 279.315 35.1992C275.545 35.1992 272.908 32.7207 272.249 28.7656H294.028C294.081 28.1064 294.134 27.4473 294.134 26.7617C294.107 17.9023 287.885 11.4688 279.315 11.4688C270.746 11.4688 264.497 17.9023 264.497 26.7617ZM272.592 23.4922C273.066 20.5654 275.519 18.3242 279.315 18.3242C283.06 18.3242 285.485 20.5654 286.013 23.4922H272.592Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M297.273 2.82031V41H304.866V2.82031H297.273Z" fill="var(--theme-palette-colors-gray-900)"></path><path d="M309.693 41H322.243C334.794 41 342.256 33.5117 342.282 21.9102C342.256 10.335 334.821 2.82031 322.296 2.82031H309.693V41ZM317.286 34.0391V9.78125H322.296C330.206 9.78125 334.662 14.5537 334.689 21.9102C334.662 29.293 330.18 34.0391 322.243 34.0391H317.286Z" fill="#333"></path></svg>
                        </span>
                    </Link>
                    <div className='header-right'>
                        <div className='ic-menu'>
                            <button type='button'>
                                <span></span>
                                <span>
                                    <svg viewBox="0 0 24 24"><path d="m5 3.25c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm-14 7c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm-14 7c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75zm7 0c-0.9665 0-1.75 0.7835-1.75 1.75s0.7835 1.75 1.75 1.75 1.75-0.7835 1.75-1.75-0.7835-1.75-1.75-1.75z" clip-rule="evenodd" fill="#000" fill-rule="evenodd"></path></svg>
                                </span>
                            </button>
                        </div>
                        <hr className='header-divider'/>
                        <button onClick={onClickLogOut} className='btn-log-out' type='button'>
                            <span>로그아웃</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='content-container'>
                <section className='profile-section'>
                    <div className='profile-img'>
                        <img src={userRecoilData.profileImgUrl} alt={userRecoilData.nickName} />
                        <label>
                            <span>
                                <svg viewBox="0 0 15 15" class="css-1h47l4s"><path d="m11.697 0.14712c-0.2936-0.2179-0.7103-0.19376-0.9766 0.072463l-10.501 10.498-0.076884 0.09c-0.092277 0.1273-0.14287 0.2812-0.14287 0.4404v3.0023l0.0068466 0.1018c0.049662 0.366 0.36346 0.6482 0.74315 0.6482h2.5034l0.10177-0.0068c0.36607-0.0497 0.64823-0.3635 0.64823-0.7432l-0.00685-0.1018c-0.04966-0.366-0.36346-0.6482-0.74315-0.6482h-1.7544v-1.941l6.5007-6.4987 1.9389 1.9389-4.7206 4.7203-0.07262 0.0841c-0.21789 0.2936-0.19372 0.7103 0.07252 0.9766 0.29286 0.2929 0.76774 0.2929 1.0607 1e-4l8.5017-8.5 0.0726-0.0841c0.2179-0.29358 0.1937-0.71023-0.0725-0.97652l-2.999-3-0.0841-0.072632zm-0.698 5.7915 2.1897-2.1896-1.939-1.938-2.1895 2.1888 1.9388 1.9388z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </span>
                        </label>
                    </div>
                    <p>{profileData.nickName}님, 환영해요.</p>
                </section>
                <section className='acount-section'>
                    <p>계정 관리</p>
                    <p>서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.</p>
                    <ul>
                        <li>
                            <p>이메일</p>
                            <p>{profileData.email}</p>
                        </li>
                        <li onClick={onClickIsNameModal}>
                            <p>이름</p>
                            <p>{profileData.nickName}</p>
                            <span class="material-symbols-outlined">navigate_next</span>
                        </li>
                        <li onClick={onClickIsTelModal}>
                            <p>휴대폰 번호</p>
                            <p>+82 {profileData.phoneNum}</p>
                            <span class="material-symbols-outlined">navigate_next</span>
                        </li>
                    </ul>
                </section>
                <section className='acount-section'>
                    <p>개인 정보 보호</p>
                    <p>내 계정을 안전하게 보호하기 위한 정보를 관리할 수 있습니다.</p>
                    <ul>
                        <li onClick={onClickIsPwdModal}>
                            <p>비밀번호 변경</p>
                            <p></p>
                            <span class="material-symbols-outlined">navigate_next</span>
                        </li>
                        <li onClick={()=>setIsDeleteModal(true)}>
                            <p>회원 탈퇴</p>
                            <p></p>
                            <span class="material-symbols-outlined">navigate_next</span>
                        </li>
                    </ul>
                </section>
                <section className='service-section'>
                    <p>서비스 바로가기</p>
                    <p>OneID를 이용하는 서비스를 만나보세요.</p>
                    <div className='ic-id-share'>
                        <a href=''>
                            <div>
                                <img src='https://static.wanted.co.kr/images/wantedoneid/wanted_logo.png' />
                            </div>
                            <p>원티드</p>
                        </a>
                        <a href=''>
                            <div>
                                <img src='https://static.wanted.co.kr/images/wantedoneid/gigs_logo.png' />
                            </div>
                            <p>원티드긱스</p>
                        </a>
                        <a href=''>
                            <div>
                                <img src='https://static.wanted.co.kr/images/wantedoneid/kreditjob_logo.png' />
                            </div>
                            <p>크레딧잡</p>
                        </a>
                        <a href=''>
                            <div>
                                <img src='https://static.wanted.co.kr/images/wantedoneid/spotlight_logo.png' />
                            </div>
                            <p>Spotlight</p>
                        </a>
                    </div>
                </section>
            </div>
            <div className='footer'>
                <div>
                    <a href='https://id.wanted.jobs/terms/ko'>이용약관</a>
                    <a href='https://id.wanted.jobs/privacy/ko'>개인정보처리방침</a>
                </div>
                <p>© Wantedlab, Inc.</p>
                <div>
                    <div>
                        <img src="https://static.wanted.co.kr/images/wantedoneid/ico_KR.svg" />
                        <div className='footer-select'>
                            <select>
                                <option value="ko_KR">한국어</option>
                                <option value="en_US">English</option>
                                <option value="ja">日本語</option>
                            </select>
                            <div>
                                <span>
                                    <svg viewBox="0 0 10 6" class="css-1h47l4s"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z" fill="#333"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        {isTelModal && <Modal>
            <div>
                <div className='modal-header'>
                    <div className='box-header-left'></div>
                    <div className='modal-header-title'>
                        <p>
                            <p>휴대폰 번호</p>
                        </p>
                    </div>
                    <div className='btn-close-wrapper'>
                        <button onClick={onClickIsTelModal} type='button'>
                            <span>
                                <svg viewBox="0 0 24 24"><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className='modal-body-content'>
                            <div>
                                <div className='modal-body-select'>
                                    <select>
                                        <option value="KR">South Korea +82</option>
                                    </select>
                                    <div>
                                        <span>
                                            <svg viewBox="0 0 10 6" class="css-1h47l4s"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.93934L1.28033 0.21967C0.987437 -0.0732233 0.512563 -0.0732233 0.21967 0.21967C-0.0732233 0.512563 -0.0732233 0.987437 0.21967 1.28033L4.46967 5.53033C4.76256 5.82322 5.23744 5.82322 5.53033 5.53033L9.78033 1.28033C10.0732 0.987437 10.0732 0.512563 9.78033 0.21967C9.48744 -0.0732233 9.01256 -0.0732233 8.71967 0.21967L5 3.93934Z" fill="#333"></path></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='modal-tel-input'>
                                    {isTelChange 
                                    ? <>
                                    <input className={tel && validatePhoneNum(tel) ? 'modal-input-true' : 'modal-input-false'} value={tel} onChange={(e)=>setTel(e.target.value)} type='text' placeholder='(예시) 01013245768'/>
                                    <button className={tel && validatePhoneNum(tel) ? 'modal-tel-change' : 'modal-tel-disabled'}>
                                        <span>인증번호 받기</span>
                                    </button> 
                                    </>
                                    :<>
                                    <input className='input-disabled' value={profileData.phoneNum} type='text' placeholder='(예시) 01013245768' readOnly />
                                    <button onClick={onClickTelChange} type='button'>
                                        <span>번호 변경</span>
                                    </button>
                                    </>
                                    }
                                </div>
                                {tel && !validatePhoneNum(tel) && <p className='modal-input-info'>올바른 전화번호를 입력해주세요.</p>}
                                <div className='modal-num-input'>
                                    <input className='input-disabled' type="text" placeholder="인증번호를 입력해주세요." readOnly />
                                </div>
                                {!isTelChange && <p>인증되었습니다.</p>}
                            </div>
                        </div>
                        <div className='modal-btn-wrapper'>
                            <button onClick={onClickIsTelModal} className='btn-modal' type='button'>
                                <span>취소</span>
                            </button>
                            <button onClick={patchPhoneNum} className={tel && validatePhoneNum(tel) ? 'btn-modal btn-modal-active' :'btn-modal-disabled'} type='submit'>
                                <span>저장</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>}

        {isPwdModal && 
        <Modal>
            <div>
                <div className='modal-header'>
                    <div className='box-header-left'></div>
                    <div className='modal-header-title'>
                        <p>
                            <p>비밀번호 변경</p>
                        </p>
                    </div>
                    <div className='btn-close-wrapper'>
                        <button onClick={onClickIsPwdModal} type='button'>
                            <span>
                                <svg viewBox="0 0 24 24"><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg>
                            </span>
                        </button>
                    </div>
                    
                    
                </div>

                <div className='modal-body'>
                    <form>
                        <div className='modal-body-content'>
                            <div className='modal-body-label'>
                                <label>현재 비밀번호</label>
                            </div>
                            <input value={nowPwd} onChange={(e) => setNowPwd(e.target.value)} className={nowPwd && validatePwd(nowPwd) ? 'modal-input-true' : 'modal-input-false'} type='password' placeholder='비밀번호를 입력해주세요.'/>
                            {nowPwd && !validatePwd(nowPwd) && <p className='modal-input-info'>올바르지 않은 비밀번호입니다.</p>}
                            <div className='modal-body-label'>
                                <label>새 비밀번호</label>
                            </div>
                            <input className={pwd && validatePwd(pwd) ? 'modal-input-true' : 'modal-input-false'} value={pwd} onChange={(e)=>setPwd(e.target.value)} type='password' placeholder='새 비밀번호를 입력해주세요.'/>
                            <input className={pwdConfirm && validatePwd(pwdConfirm) ? 'modal-input-true' : 'modal-input-false'} value={pwdConfirm} onChange={(e) => setPwdConfirm(e.target.value)} type='password' placeholder='새 비밀번호를 다시 한번 입력해주세요.'/>
                            {pwdConfirm && returnText()}
                            {pwd && !validatePwd(pwd) && <p className='modal-input-info'>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>}
                        </div>

                        <div className='modal-btn-wrapper'>
                            <button onClick={onClickIsPwdModal} className='btn-modal' type='button'>
                                <span>취소</span>
                            </button>
                            <button onClick={patchPwd} className={pwd && nowPwd && pwdCheck(pwd, pwdConfirm) ? 'btn-modal btn-modal-active' :'btn-modal-disabled'} type='submit'>
                                <span>저장</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>}

        {isNameModal &&
        <Modal>
            <div>
                <div className='modal-header'>
                    <div className='box-header-left'></div>
                    <div className='modal-header-title'>
                        <p>
                            <p>이름</p>
                        </p>
                    </div>
                    <div className='btn-close-wrapper'>
                        <button onClick={onClickIsNameModal} type='button'>
                            <span>
                                <svg viewBox="0 0 24 24"><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className='modal-body-content'>
                            <div>
                                <div className='modal-num-input'>
                                    <input className={!validateNickName(name) ? 'modal-input-true' : 'modal-input-false'} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="이름을 입력해주세요." />
                                </div>
                                {name && validateNickName(name) && <p className='modal-input-info'>이름에는 공백과 특수문자가 포함될 수 없습니다.</p>}
                            </div>
                        </div>
                        <div className='modal-btn-wrapper'>
                            <button onClick={onClickIsNameModal} className='btn-modal' type='button'>
                                <span>취소</span>
                            </button>
                            <button onClick={patchName} className={name ? 'btn-modal btn-modal-active' :'btn-modal-disabled'} type='submit'>
                                <span>저장</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>}

        {isDeleteModal &&
        <DeleteModal>
            <div>
                <div>
                    <div>
                        <div className='modal-content-wrapper'>
                            <h1>회원 탈퇴 시 주의사항</h1>
                            <div className='modal-content-info'>
                                <p>탈퇴하기 전에</p>
                                <p>· 탈퇴 시 OneID를 통해 등록한 서비스의 모든 정보가 영구적으로 삭제되며, 다시는 복구할 수 없습니다.</p>
                            </div>
                            <div className='modal-content-info'>
                                <p>미리 백업하기</p>
                                <p>· OneID로 등록한 서비스에서 정보 백업을 원하실 경우, 탈퇴 이전에 해당 서비스에서 백업을 진행해 주세요.</p>
                            </div>
                            <div className='modal-content-info'>
                                <p>미리 관리하기</p>
                                <p>· 서비스 이용 중 본인의 OneID 계정에 귀속되지 않은 정보는 자동으로 삭제되지 않으며, 탈퇴 시 수정이나 삭제가 불가능합니다. OneID 계정에 귀속되지 않은 정보를 수정하거나 삭제하려는 경우, 회원 탈퇴 이전에 해당 서비스에서 수정 또는 삭제를 진행해 주세요.</p>
                            </div>
                            <hr className='modal-content-divider' />
                            <div className='modal-content-user'>
                                <p>탈퇴하려는 계정</p>
                                <div>
                                    <div>
                                        <img width='32' height='32' src={userRecoilData.profileImgUrl} alt="profile-img" />
                                    </div>
                                    <p>{profileData.email}</p>
                                </div>
                            </div>
                            <div className='delete-data-info'>
                                <p>삭제되는 정보</p>
                                <div>
                                    <div className='ic-wanted-logo'>
                                        <div>
                                            <img src='https://static.wanted.co.kr/images/wantedoneid/wanted_logo.png' alt='wanted-logo' />
                                        </div>
                                    </div>
                                    <p>wanted</p>
                                    <div className='delete-data-text'>
                                        <p>· 활동 데이터</p>
                                        <p>· 미지급된 채용 보상금 및 포인트 데이터</p>
                                    </div>
                                </div>
                                <hr className='modal-content-divider' />
                            </div>
                            <div className='checkbox-agree-wrapper'>
                                <div>
                                    <div className='box-checkbox'></div>
                                    <input className='input-checkbox' type='checkbox' />
                                    <div className='text-agree-content'>
                                        <p>회원 탈퇴 이후 미결된 금액을 받을 수 없음을 이해했으며 동의합니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='box-checkbox'></div>
                                    <input className='input-checkbox' type='checkbox' />
                                    <div className='text-agree-content'>
                                        <p>회원 탈퇴를 진행하여 해당 OneID 계정에 귀속된 모든 정보를 삭제하는 데 동의합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={onClickdeletUser} className='btn-user btn-user-delete'>
                            <span>회원탈퇴</span>
                        </button>
                        <button onClick={()=>setIsDeleteModal(false)} className='btn-user btn-user-delete-cancel'>
                            <span>회원탈퇴 취소</span>
                        </button>
                    </div>
                </div>
            </div>
        </DeleteModal>}
        
        {isToast &&
        <ToastMessage onClick={() => setIsToast(false)}>
            <div>
                <div className='ic-success-wrapper'>
                    <span>
                        <svg viewBox="0 0 12 8"><path d="M1.5 4L4.5 7L10.5 1" stroke="#08ba9c" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                </div>
                <div className='text-update-success'>
                    <p>성공적으로 업데이트했습니다.</p>
                </div>
            </div>
        </ToastMessage>}

        </>

        
    )
}