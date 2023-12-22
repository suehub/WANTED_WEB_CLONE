import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { SvgStyle } from '../common/styled';

export default function MainBanner() {

    const [bannerDatas, setBannerDatas] = useState([]);
    const customSlider = useRef();

    useEffect(() => {
        getBannerDatas();
    }, []);

    // banner data get
    const getBannerDatas = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/banners/main`);
            if(res.data.code === 1000) {   // 요청 성공
                console.log(`/banners/main ${res.data.message}`);
                setBannerDatas(res.data.result);
              } else if(res.data.code === 2015) {
                  console.log(`/banners/main ${res.data.message}`);
              }
        } catch (error) {
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
        }
        
    }

    // slider arrow 
    const next = () => {
        customSlider.current.slickNext();
    };
    const previous = () => {
        customSlider.current.slickPrev();
    };

    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        speed: 500,
        initialSlide: 0
    };

    return (
        <BannerWrapper>
            <PrevButton onClick={previous}>
                <span>
                    <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>
                </span>
            </PrevButton>

            <SliderStyled {...settings} ref={customSlider}>
                {bannerDatas.map((e) => {
                    return(
                        <div key={e.bannerIdx} className='banner-home-main'>
                            <div className='banner-img-wrapper'>
                                <a>
                                    <img src={e.bannerImgUrl} alt={e.bannerTitle} />
                                </a>
                            </div>
                            
                            <div className='banner-info-wrapper'>
                                <h2>{e.bannerTitle}</h2>
                                <h3>{e.bannerContent}</h3>
                                <hr />
                                <a>
                                    <span>
                                        바로가기
                                        <span>
                                            <span>
                                                <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                                            </span>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </SliderStyled>
            <NextButton onClick={next}>
                <span>
                    <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                </span>
            </NextButton>
        </BannerWrapper>

    )
}

const BannerWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const SliderStyled = styled(Slider)`
    font-family: 'Pretendard';
    // 기존 버튼 기능 삭제
    .slick-prev::before, .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide{
        width: 1060px;
    }
    
    .banner-home-main{
        width: 100%;
        display: inline-block;
    }
    .banner-img-wrapper{
        position: relative;
        padding-bottom: 28.3%;
    }
    .banner-img-wrapper > a > img{
        display: inline-block;
        position: absolute;
        width: 98%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 4px;
        object-fit: cover;
        cursor: pointer;
    }
    .banner-info-wrapper{
        position: relative;
        width: 330px;
        height: 146px;
        border-radius: 4px;
        background-color: #fff;
        text-align: left;
        left: 25px;
        top: -190px;
    }
    .banner-info-wrapper > h2{
        margin: 20px 20px 0px;
        padding-top: 15px;
        font-size: 20px;
        line-height: 1.6;
        font-weight: 700;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .banner-info-wrapper > h3{
        margin: 0 20px;
        height: 44px;
        font-size: 14px;
        line-height: 1.64;
        color: #333;
        font-weight: 500;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .banner-info-wrapper > hr {
        height: 1px;
        margin: 0;
        border: none;
        background-color: #ececec;
    }
    .banner-info-wrapper > a{
        height: 40px;
        color: #36f;
        margin: 6px 0 0 13px;
        padding: 6px 8px;
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        min-width: 64px;
        box-sizing: border-box;
        border-radius: 25px;
        border: none;
        cursor: pointer;
    }
    .banner-info-wrapper > a > span{
        width: 100%;
        font-size: inherit;
        font-weight: inherit;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
        color: inherit;
    }
    .banner-info-wrapper > a > span > span{
        margin-top: -2px;
        margin-right: -1px;
        margin-left: 2px;
    }
    .banner-info-wrapper > a > span > span > span{
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
`;

const SlickButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 170px;
    width: 30px;
    height: 60px;
    opacity: .5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    z-index: 10;
    > span{
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
`

const PrevButton = styled(SlickButton)`
    left: calc((100% - 1250px)/2);
`;

const NextButton = styled(SlickButton)`
    right: calc((100% - 1250px)/2);  
`;