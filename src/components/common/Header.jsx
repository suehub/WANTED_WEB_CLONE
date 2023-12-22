import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logState } from '../../recoil/logState';
import { HeaderStyle } from '../styled/headerStyled';

export default function Header() {

    const [userRecoilData, setuserRecoilData] = useRecoilState(logState);     // 로그인한 사용자의 데이터 (userIdx, jwt)
    const [alarmDatas, setAlarmDatas] = useState([]);

    const [isAlarmPopover, setIsAlarmPopover] = useState(false);
    const [isProfilePopover, setIsProfilePopover] = useState(false);

    const navigate = useNavigate();
    
    const jwt = userRecoilData.jwt;

    useEffect(() => {
        getAlarmDatas();
    }, [isAlarmPopover]);

    // 내 알람 목록 API
    const getAlarmDatas = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/users/alarm`,{
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/users/alarm ${res.data.message}`);
            setAlarmDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/users/alarm ${res.data.message}`);
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

    const onClickLogOut = () => {
        setuserRecoilData({
            userIdx: 1,
            nickName: "",
            profileImgUrl: "",
            jwt: ""
        });
        alert('로그아웃');
        navigate('/');
    }

    const clickIsAlarmPopover = () => {
        setIsAlarmPopover(!isAlarmPopover);
        setIsProfilePopover(false);
    }

    const clickIsProfilePopover = () => {
        setIsProfilePopover(!isProfilePopover);
        setIsAlarmPopover(false);
    }

    return (
        <HeaderStyle>
            <div className='nav-gnb-wrap'>
                <nav className='nav-gnb'>
                    <div className='ic-home-wrap'>
                        <div>
                            <button className='btn-category-toggle'>
                                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75" alt="hamberger menu" />
                            </button>
                            <Link to="/">
                                <i className='ic-logo-home'>wanted</i>
                            </Link>
                        </div>
                    </div>
                    <ul className='ul-gnb-wrap'>
                        <li><Link to={'/recruit'}>채용</Link></li>
                        <li><Link>이벤트</Link></li>
                        <li><Link>직군별 연봉</Link></li>
                        <li><Link>이력서</Link></li>
                        <li>
                            <Link>
                                커뮤니티
                                <em>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                        <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500">
                                            <g fill="#36F">
                                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                        <tspan x="0" y="8">New</tspan>
                                                    </text>
                                            </g>
                                        </g>
                                    </svg>
                                </em>
                            </Link>
                        </li>
                        <li><Link>프리랜서</Link></li>
                        <li>
                            <Link>
                                AI 합격예측
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                                        <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500">
                                            <g fill="#36F">
                                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                                    <tspan x="0" y="8">Beta</tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <aside className='aside-gnb-sign'>
                        <ul>
                            <li>
                                <button className='btn-gnb-search'>
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                            </li>
                            {userRecoilData.jwt ?
                            <>
                                <li>
                                    <button onClick={clickIsAlarmPopover} className={isAlarmPopover ? 'btn-alarm-wrapper btn-alarm-active' : 'btn-alarm-wrapper'}>
                                        <span className="material-symbols-outlined">notifications</span>
                                    </button>
                                    {!isAlarmPopover && <span className='span-btn-right'>
                                        <svg width="5" height="5" viewBox="0 0 6 6"><g fill="#fff" fill-rule="nonzero"><path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)"></path></g></svg>
                                    </span>}
                                    {isAlarmPopover &&
                                        <div className='menu-alarm-popover'>
                                            <div>
                                                <div className='alarm-popover-content'>
                                                {(alarmDatas.length === 0) 
                                                    ?
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <a>
                                                                    현재 알림이 없습니다.
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    : 
                                                    <ul>
                                                        <li>
                                                            <div>
                                                                <a>
                                                                    <div className='alarm-content-wrapper'>
                                                                        <p className='alarm-category'>커리어 성장</p>
                                                                        <p className='alarm-message'>
                                                                            리걸테크 시장의 혁신! 마크비전
                                                                            <br />
                                                                            전 세계 창작자의 권리를 지키는 마크비전 엔지니어링팀에 대해 자세히 알아보세요.
                                                                        </p>
                                                                        <p className='alarm-date'>2023.01.05 (목)</p>
                                                                    </div>
                                                                    <div>
                                                                        <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.611 11L7.306 18.306C7.037 18.574 7.037 19.009 7.306 19.278C7.574 19.546 8.009 19.546 8.278 19.278L16.069 11.486C16.338 11.218 16.338 10.782 16.069 10.514L8.278 2.722C8.009 2.454 7.574 2.454 7.306 2.722C7.037 2.991 7.037 3.426 7.306 3.694L14.61 11H14.611Z" fill="#939393"></path></svg>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>}
                                                </div>
                                                <div className='alarm-popover-bubble'></div>
                                            </div>
                                        </div>
                                    }
                                </li>
                                <li>
                                    <button onClick={clickIsProfilePopover} className='btn-profile-wrapper'>
                                        <div className={isProfilePopover ? 'btn-profile-inner btn-profile-blue' : 'btn-profile-inner'}>
                                            <div></div>
                                        </div>
                                    </button>                             
                                    <span className='span-btn-right'>
                                        <svg width="5" height="5" viewBox="0 0 6 6"><g fill="#fff" fill-rule="nonzero"><path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)"></path></g></svg>
                                    </span>
                                    {isProfilePopover &&
                                        <div className='menu-popover-wrapper'>
                                            <div className='menu-popover'>
                                                <div className='menu-popover-header'></div>
                                                <ul className='menu-popover-list'>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>MY 원티드</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to='/profile'>
                                                            <span>프로필</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>지원현황</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>제안받기 현황</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>좋아요</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to='/profile/bookmarks'>
                                                            <span>북마크</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>추천</span>
                                                        </Link>
                                                    </li>
                                                    <li className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>포인트</span>
                                                        </Link>
                                                    </li>
                                                    <li onClick={onClickLogOut} className='menu-popover-profile'>
                                                        <Link to=''>
                                                            <span>로그아웃</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                        </div>
                                        <div className='menu-popover-bubblePoint'></div>
                                    </div>
                                    }       
                                </li>
                            </>
                            : 
                                <li>
                                    <button onClick={() => navigate('/log')} className='btn-gnb-sign'>회원가입/로그인</button>
                                </li>
                            }
                            <li className='li-left-division'>
                                <Link>기업 서비스</Link>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </HeaderStyle>
    )
}