import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { logState } from '../../recoil/logState';
import { SvgStyle } from '../common/styled';
import JobListCard from '../common/JobListCard';
import { Header } from '../styled/matchedJobListStyled';
import { Container } from '../styled/matchedJobListStyled';
import { SectionStyled } from '../styled/matchedJobListStyled';
import { SliderStyled } from '../styled/matchedJobListStyled';
import { SectionButtonStyle } from '../styled/matchedJobListStyled';
import { LogPopupStyled } from '../styled/matchedJobListStyled';
import { PopupStyled } from '../styled/matchedJobListStyled';

export default function MatchedJobList() {

    const userRecoilData = useRecoilValue(logState);

    const customSlider = useRef();

    const [jobLists, setJobLists] = useState([]);
    const [isPopup, setIsPopup] = useState(false);

    const jwt = userRecoilData.jwt;

    useEffect(() => {
        getRecruitDatas();
    }, []);

    // 로그인 시 보이는 제안하는 합격률 높은 포지션 API GET
    const getRecruitDatas = async (e) => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/recommend`,{
            headers: {
                'X-ACCESS-TOKEN': jwt
              }
        })
        .then((res) => {
            if(res.data.code === 1000) {   // 요청 성공
                console.log(`recruit/recommend ${res.data.message}`);
                setJobLists(res.data.result);
            } else if(res.data.code !== 1000) {
                console.log(`recruit/recommend ${res.data.message}`);
            }
            // console.log(res.data.result);

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

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0
    };

    // slider button 
    const next = () => {
        customSlider.current.slickNext();
    };
    const previous = () => {
        customSlider.current.slickPrev();
    };

    return (
        <>
            {userRecoilData.jwt
            ?
            <SectionStyled>
                <div>
                    <div className='section-header-title'>
                        <SectionButtonStyle onClick={previous}>
                            <span>
                                <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>
                            </span>
                        </SectionButtonStyle>
                        <div>
                            <h2>
                                <div className='header-title-main'>
                                    <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' alt='wantedai-logo'/>
                                    가 제안하는 합격률 높은 포지션
                                    <button onClick={() => setIsPopup(true)} className='btn-header-title' type="button">
                                        <SvgStyle viewBox="0 0 17 17"><defs><filter id=""><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></SvgStyle>
                                    </button>
                                </div>
                            </h2>
                            <a className='section-header-subtitle' href='https://www.wanted.co.kr/events'>
                                포지션 전체보기
                                <span>
                                    <SvgStyle viewBox="0 0 19 19"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                                </span>
                            </a>
                        </div>
                        <SectionButtonStyle onClick={next}>
                            <span>
                                <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                            </span>
                        </SectionButtonStyle>
                    </div>
                </div>

                <div>
                    <SliderStyled {...settings} ref={customSlider}>
                        {jobLists.map((e) => {
                            return (
                                <div key={e.jobIdx} className='box-slider-wrapper'>
                                    <JobListCard state={e} />
                                </div>
                                
                            )
                        })}
                        {jobLists.map((e) => {
                            return (
                                <div key={e.jobIdx} className='box-slider-wrapper'>
                                    <JobListCard state={e} />
                                </div>
                                
                            )
                        })}
                    </SliderStyled>
                </div>

                {isPopup && 
                <LogPopupStyled className='container-popup-wrapper'>
                    <hr className='container-popup-divider' />
                    <p className='container-popup-title'>
                        <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' alt='watedai-logo' width='70'/>
                        &nbsp;가 추천해드립니다!
                    </p>
                    <button onClick={() => setIsPopup(false)} className='btn-popup-close' type='button'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="21" height="21" color="#666"><g fill="none" fill-rule="evenodd"><g fill="#666"><g><g><g><path d="M0 7H14V8H0z" transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584)"></path><path d="M0 7H14V8H0z" transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584) rotate(90 7 7.5)"></path></g></g></g></g></g></svg>
                    </button>
                    <p className='container-popup-description'>
                        원티드 이력서를 400자 이상 작성하시면, 
                        <br />
                        <br />
                        열심히 분석해서 딱 맞는 포지션을 찾아드려요!
                        <br />
                        <br />
                        이력서를 상세하게 작성하실수록, 추천의 정확도가 높아집니다.
                    </p>
                    <div className='container-popup-go'>
                        <div>
                            <a href='https://www.wanted.co.kr/cv/list'>이력서 업데이트 하러가기 &#62;</a>
                        </div>
                    </div>
                </LogPopupStyled>}

            </SectionStyled>
            :
            <Container>
                <Header>
                    <div className='header-title-logo'>
                        <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' alt='wantedai-logo'/>
                    </div>
                    <h2 className='header-title'>
                        <div className='header-title-main'>
                            <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' alt='wantedai-logo'/>
                            가 제안하는 합격률 높은 포지션
                            <button onClick={() => setIsPopup(true)} className='btn-header-title' type="button">
                                <svg viewBox="0 0 17 17"><defs><filter id=""><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g></svg>
                            </button>
                        </div>
                    </h2>
                </Header>

                <div className='container-matched'>
                    <h3>회원가입하면 포지션을 추천해드려요.</h3>
                    <button type='button'>지금 시작하기</button>
                </div>
                {isPopup &&
                <PopupStyled className='container-popup-wrapper'>
                    <hr className='container-popup-divider' />
                    <p className='container-popup-title'>
                        <img src='https://static.wanted.co.kr/images/ai/logo-wantedai.png' alt='watedai-logo' width='70'/>
                        &nbsp;가 추천해드립니다!
                    </p>
                    <button onClick={() => setIsPopup(false)} className='btn-popup-close' type='button'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="21" height="21" color="#666"><g fill="none" fill-rule="evenodd"><g fill="#666"><g><g><g><path d="M0 7H14V8H0z" transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584)"></path><path d="M0 7H14V8H0z" transform="translate(-600 -121) translate(319 113) rotate(45 137.178 355.712) translate(.795 .584) rotate(90 7 7.5)"></path></g></g></g></g></g></svg>
                    </button>
                    <p className='container-popup-description'>
                        원티드 이력서를 400자 이상 작성하시면, 
                        <br />
                        <br />
                        열심히 분석해서 딱 맞는 포지션을 찾아드려요!
                        <br />
                        <br />
                        이력서를 상세하게 작성하실수록, 추천의 정확도가 높아집니다.
                    </p>
                    <div className='container-popup-go'>
                        <div>
                            <a href='https://www.wanted.co.kr/cv/list'>이력서 업데이트 하러가기 &#62;</a>
                        </div>
                    </div>
                </PopupStyled>}
            </Container>
            }
        </>
       
    )
}