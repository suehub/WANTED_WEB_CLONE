import React from 'react';
import styled from 'styled-components';

export default function CareerConnectBanner() {
  return (
    <Container>
        <picture>
            <source srcset="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.webp" type="image/webp" />
            <img src="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.png" alt="career-connect-icon" />
        </picture>
        <button className='btn-connect-banner'>
            <div>
                <p>내 연차에 이 연봉 괜찮은가? 궁금할 땐</p>
                <strong>커리어 중간점검</strong>
                <picture>
                    <source srcset="https://static.wanted.co.kr/career_connect/gomin.webp" type="image/webp" />
                    <img src="https://static.wanted.co.kr/career_connect/gomin.png" alt="career-connect-icon" />
                </picture>
            </div>
        </button>
    </Container>
  )
}

const Container = styled.aside`
    margin: 60px auto 0;
    width: 87.72%;
    max-width: 1060px;
    position: relative;
    height: 103px;
    border-radius: 10px;
    background: #2b4bc8;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Pretendard';

    > picture{
        z-index: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
    > picture > img{
        width: 100%;
        height: 100%;
    }
    .btn-connect-banner{
        position: relative;
        width: 100%;
        height: 100%;
        padding: 32px 40px;
        font-size: 22px;
        font-weight: 800;
        line-height: 26px;
        color: #fff;
    }
    .btn-connect-banner > div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between
    }
    .btn-connect-banner > div > p{
        z-index: 1;
    }
    .btn-connect-banner > div > strong{
        z-index: 1;
        border-radius: 20px;
        background-color: #fff;
        color: #2b4bc8;
        font-size: 15px;
        line-height: 18px;
        font-weight: 600;
        padding: 11px 20px;
    }
    .btn-connect-banner > div > picture{
        z-index: 0;
        position: absolute;
        right: 240px;    
        bottom: -7px;
        width: 124px;
        height: 100px;
    }
    .btn-connect-banner > div > picture > img{
        width: 100%;
        height: 100%;
    }
`;
