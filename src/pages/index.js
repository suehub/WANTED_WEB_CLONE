import React from 'react';
import styled from 'styled-components';
import CreatorSection from '../components/indexPage/CreatorSection';
import EmpolymentSection from '../components/indexPage/EmpolymentSection';
import EventSection from '../components/indexPage/EventSection';
import MainBanner from '../components/indexPage/MainBanner';
import { SvgStyle } from '../components/common/styled';
import { DividerContainer } from '../components/common/styled';
import CarrerContentList from '../components/indexPage/CareerContentList';

export default function IndexPage() {

    return (
        <MainStyled>
            <MainBanner />
            <CarrerContentList />
            <CreatorSection />
            <LineBanner>
                <a href='https://www.wanted.co.kr/profile'>
                    <div className='banner-box-wrapper'>
                        <div>
                            <span>
                                직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
                                <em> 👀</em>
                                <span>
                                    <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                                </span>
                            </span>
                        </div>
                    </div>
                </a>
            </LineBanner>
            <EventSection />
            <DividerContainer><hr /></DividerContainer>
            <EmpolymentSection />
            
        </MainStyled>
    )
}


const MainStyled = styled.main`
    display: block;
    background-color: #fff;
    margin-top: 50px;
    padding-top: 25px;
    width: 100%;
`;

const LineBanner = styled.div`
    margin-top: 0!important;
    max-width: 1060px;
    width: 90%;
    margin: 60px auto 0;
    font-family: 'Pretendard';
    .banner-box-wrapper{
        display: flex;
        word-break: keep-all;
        text-align: center;
    }
    .banner-box-wrapper > div{
        background-image: linear-gradient(102deg,#2f5fef -127%,#046afe 50%,#00d2dd 145%);
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        padding: 17px 30px;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        border-radius: 4px;
    }
`;

