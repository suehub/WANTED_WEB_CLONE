import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LineBanner() {

    return (
        <LineBannerWrapper>
            <Link to='/recruitlist'>
                <div className='box-banner-link'>
                    <div>
                        <span class="material-symbols-outlined">search</span>
                        채용 중인 포지션 보러가기
                    </div>
                </div>
            </Link>
        </LineBannerWrapper>
    )
}

const LineBannerWrapper = styled.aside`
    max-width: 1060px;
    width: 87.72%;
    margin: -100px auto 60px auto;
    font-family: 'Pretendard';

    .box-banner-link{
        display: flex;
        word-break: keep-all;
        text-align: center;
    }
    .box-banner-link > div{
        padding: 21px 30px;
        font-size: 18px;
        line-height: normal;
        background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 700;
        border-radius: 38.5px;
        cursor: pointer;
    }
    .box-banner-link > div > span{
        height: 100%;
        position: relative;
        padding: 0 10px;
    }
`;
