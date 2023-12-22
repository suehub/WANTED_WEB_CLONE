import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SvgStyle } from '../common/styled';

export default function EventBanners() {

    const [eventDatas, setEventDatas] = useState([]);
    const customSlider = useRef();

    useEffect(() => {
        getEventDatas();
    }, []);

    // get event data
    const getEventDatas = async () => {
        try{
            const result = await axios({
                method: "GET",
                url: "/"
            });
            console.log('eventDatas 요청에 성공하였습니다.');
            setEventDatas(result.data.eventDatas);
        } catch (error) {
            console.log(error);  // 오류를 발생시키는 HTTP 코드를 정의
        }
        
    }

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
        <SectionStyled>
            <div>
                <div className='section-header-title'>
                    <SectionButtonStyle onClick={previous}>
                        <span>
                            <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>
                        </span>
                    </SectionButtonStyle>
                    <div>
                        <div>
                            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
                        </div>
                        <a className='section-header-subtitle' href='https://www.wanted.co.kr/events'>
                            이벤트 전체보기
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
                
                <div className='section-event-banner'>
                    <SliderStyled {...settings} ref={customSlider}>
                        {eventDatas.map((e) => {
                            return (
                                <div className='slick-item-event'>
                                    <a href={e.url}>
                                        <div className='slick-img-wrapper'>
                                            <img src={e.src} alt={e.title} loading='lazy' />
                                        </div>
                                        <div className='slick-content-wrapper'>
                                            <div className='slick-event-kind'>
                                                <span>
                                                    <span>{e.kind}</span>
                                                </span>
                                            </div>
                                            <h3>{e.title}</h3>
                                            <p>{e.date}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                        
                    </SliderStyled>
                </div>
            </div>
        </SectionStyled>
    )
}

const SectionStyled = styled.section`
    font-family: 'Pretendard';
    padding: 60px 0;

    > div{
        max-width: 1060px;
        width: 90%;
        margin: 0 auto;
    }
    .section-header-title{
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        grid-gap: 8px;
        gap: 8px;
        justify-content: space-between;
    }
    .section-header-title > div{
        text-align: center; 
    }
    .section-header-title > div > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .section-header-title > div > div > h2{
        font-size: 22px;
        line-height: 1.33;
        font-weight: 700;
        color: #333;
        margin-left: 4px;
    }
    .section-header-subtitle{
        margin: 5px 0 0 0;
        font-size: 13px;
        font-weight: 500;
        line-height: normal;
        vertical-align: middle;
        color: #767676!important;
    }
    .section-header-subtitle > span{
        align-items: inherit;
        display: inline-flex!important;
        width: 10px!important;
        margin-left: 4px!important;
        vertical-align: middle!important;
    }

    .section-event-banner{
        margin: -8px;
    }
`;

const SliderStyled = styled(Slider)`
    font-family: 'Pretendard';

    // 기존 버튼 기능 삭제
    .slick-prev::before, .slick-next::before {
        opacity: 0;
        display: none;
    }
    
    .slick-slider{
        margin-bottom: 10px;
    }
    .slick-item-event{
        width: 100%;
        display: inline-block;
        padding: 8px;
    }
    .slick-img-wrapper{
        position: relative;
        height: auto;
        padding-bottom: 52.3%;
        padding-left: 0;
    }
    .slick-img-wrapper > img{
        display: block;
        position: absolute;
        width: 98%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 4px;
        object-fit: cover;
        outline: 1px solid rgba(0,0,0,.05);
        outline-offset: -1px;
    }
    .slick-content-wrapper{
        margin-top: 12px;
    }
    .slick-event-kind{
        display: flex;
    }
    .slick-event-kind > span{
        color: #ff9100;
        border-color: #ff9100;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        border: 1px solid;
        border-radius: 2px;
    }
    .slick-event-kind > span > span{
        font-size: 11px;
        font-weight: 700;
        line-height: normal;
        padding: 0 6px;
    }
    .slick-content-wrapper > h3{
        margin-top: 8px;
        font-size: 13px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    .slick-content-wrapper > p{
        margin-top: 3px;
        font-size: 13px;
        font-weight: 500;
        color: #aaa;
    }
`;

const SectionButtonStyle = styled.button`
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
    font-size: 16px;
    color: #767676;
    > span{
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
`;