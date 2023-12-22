import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Presentation from '../../components/common/Presentation';
import { logState } from '../../recoil/logState';
import { Container } from '../../components/styled/profileStyled';
import { SectionStyled } from '../../components/styled/profileStyled';
import { AsideStyled } from '../../components/styled/profileStyled';

export default function Profile() {

    const userRecoilData = useRecoilValue(logState);

    const [profileData, setProfileData] = useState({});

    const jwt = userRecoilData.jwt;
    const userIdx = userRecoilData.userIdx;

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

    return (
        <Container>
            <Presentation title="프로필"/>
            <div className='content-container'>
                <AsideStyled>
                    <header className='aside-header'>
                        <div className='aside-avatar'>
                            <div style={{"background-image":`url(${userRecoilData.profileImgUrl})`}} className='aside-avatar-img'></div>
                        </div>
                        <div className='aside-me'>
                            <div className='aside-me-name'>{userRecoilData.nickName}</div>
                            <div className='aside-me-email'>{profileData.email}</div>
                            <div className='aside-me-tel'>{profileData.phoneNum}</div>
                        </div>
                        <Link to='/profile/myinfo' className='aside-edit'>기본정보 수정</Link>
                    </header>
                    <div className='matchup-status-wrapper'>
                        <Link to=''>
                            <span>관심있음</span>
                            <strong>0</strong>
                        </Link>
                        <Link to=''>
                            <span>열람</span>
                            <strong>0</strong>
                        </Link>
                        <Link to=''>
                            <span>받은 제안</span>
                            <strong>0</strong>
                        </Link>
                    </div>
                </AsideStyled>
                <SectionStyled>
                    <aside className='banner-career-connect'>
                        <picture>
                            <source srcset="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp" type="image/webp" />
                            <img src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png" alt="career-connect-icon" />
                        </picture>
                        <button className='btn-banner-career' type='button'>
                            <div>
                                <p>이력서 작성이 쉬워진다!</p>
                                <strong>내 경력 불러오기</strong>
                                <picture>
                                    <source srcset="https://static.wanted.co.kr/career_connect/trio2.webp" type="image/webp" />
                                    <img src="https://static.wanted.co.kr/career_connect/trio2.png" alt="career-connect-icon" />
                                </picture>
                            </div>
                        </button>
                    </aside>
                    <section>
                        <div className='info-setting-container'>
                            <div>
                                <header className='form-header'>
                                    <dl className='form-title'>
                                        <dt>학교·직장등록</dt>
                                    </dl>
                                </header>
                                <button className='btn-form-matchup'>
                                    매치업 서비스 소개
                                    <span class="material-symbols-outlined">info</span>                                
                                </button>
                                <div className='form-block'>
                                    <div>
                                        <div className='form-block-button'>
                                            <h6>학교</h6>
                                            <button>
                                                학교명 검색
                                                <span class="material-symbols-outlined">chevron_right</span>                                            
                                            </button>
                                        </div>
                                        <div className='form-block-button'>
                                            <h6>직장</h6>
                                            <button>
                                                직장명 검색
                                                <span class="material-symbols-outlined">chevron_right</span>                                            
                                            </button>
                                        </div>
                                        <div className='form-block-period'>
                                            <select className="select-not-value select-year">
                                                <option>YYYY</option>
                                            </select>
                                            <span className='month-dot'>.</span>
                                            <select className="select-not-value select-month">
                                                <option>MM</option>
                                            </select>
                                            <span className='term-dash'>.</span>
                                            <select className="select-not-value select-year">
                                                <option>YYYY</option>
                                            </select>
                                            <span className='month-dot'>.</span>
                                            <select className="select-not-value select-month">
                                                <option>MM</option>
                                            </select>
                                            <div className='checkbox-served-wrapper'>
                                                <input type='checkbox' />
                                                <span>현재 재직중</span>
                                            </div>
                                        </div>
                                        <label for='name' className='form-block-label'>
                                            <h6>간단 소개글</h6>
                                            <p>직무 내용, 경험, 목표 등을 추가해서 더욱 멋진 소개글을 작성해보세요.</p>
                                            <textarea type='text' autocomplete='off' defaultValue='안녕하세요. 신입 프론트엔드 개발자입니다.'></textarea>
                                        </label>
                                    </div>
                                </div>
                                <footer className='form-footer'>
                                    <div>
                                        <button type='button'>
                                            <span class="material-symbols-outlined">chevron_left</span>
                                            전문분야 설정
                                        </button>
                                        <button disabled type='button'>작성 완료</button>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </section>
                </SectionStyled>
            </div>
        </Container>
    )
}