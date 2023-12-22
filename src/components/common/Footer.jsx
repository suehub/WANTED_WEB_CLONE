import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterStyle>
        <div className='footer-row'>
            <div className='footer-nav-link'>
                <div className='footer-nav-logo'>
                    <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100' alt='wanted' />
                </div>
                <div className='footer-nav-list'>
                    <a href="https://www.wantedlab.com/">기업소개</a>
                    <a href="https://www.wanted.co.kr/terms">이용약관</a>
                    <a href="https://www.wanted.co.kr/privacy">개인정보 처리방침</a>
                    <a href="https://help.wanted.co.kr/hc/ko/">고객센터</a>
                </div>
            </div>
            <div className='footer-social-link'>
                <a href="https://www.instagram.com/wantedjobs.kr/">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube" />
                </a>
                <a href="https://www.facebook.com/wantedkr">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook" />
                </a>
                <a href="https://blog.naver.com/wantedlab">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog" />
                </a>
                <a href="https://pf.kakao.com/_XqCIxl">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao" />
                </a>
                <a href="https://post.naver.com/my.nhn?memberNo=18284175">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post" />
                </a>
                <a href="https://apps.apple.com/kr/app/id1074569961">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google" />
                </a>
            </div>
        </div>
        <div className='footer-row footer-border'>
            <p className='footer-text'>
                (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                <br />
                유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118
                <br />
                © Wantedlab, Inc.
            </p>
            <div className='footer-locale-select'>
                <img className='ic-country-select' src="https://static.wanted.co.kr/images/userweb/ico_KR.svg" alt="country flag KR" />
                <select>
                    <option value="KR">한국 (한국어)</option>
                    <option value="JP">日本 (日本語)</option>
                    <option value="WW">Worldwide (English)</option>
                    <option value="SG">Singapore (English)</option>
                </select>
                <i>
                    <span className="material-symbols-outlined">arrow_drop_down</span>
                </i>
            </div>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
    width: 100%;
    padding: 18px 0 65px;
    background-color: #fff;
    border-top: 1px solid #ececec;
    font-family: 'Pretendard';
    .footer-row{
        width: 90%;
        max-width: 1060px;
        margin: 0 auto 18px;
        display: flex;
    }
    .footer-nav-link{
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    .footer-nav-logo{
        margin-right: 50px;
    }
    .footer-nav-list{
        display: flex;
    }
    .footer-nav-list > a{
        font-size: 15px;
        color: #3a3a3a;
        font-weight: 500;
        line-height: 2.6;
        margin-right: 45px;
        white-space: nowrap;
    }
    .footer-social-link{
        display: flex;
        flex-wrap: nowrap;
        line-height: 2.6;
    }
    .footer-social-link > a{
        position: relative;
        display: block;
        float: left;
        height: 20px;
    }
    .footer-social-link > a > img{
        margin-left: 14px;
    }

    .footer-border{
        border-top: 1px solid #ececec;
        padding-top: 25px;
    }
    .footer-text{
        float: left;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.6666666667em;
        color: #767676;
        width: calc(100% - 290px);
        margin-right: 40px;
    }
    .footer-locale-select{
        position: relative;
        width: 250px;
        height: 36px;
        float: left;
    }
    .footer-locale-select > img{
        position: absolute;
        left: 15px;
        top: 55%;
        transform: translateY(-50%);
        width: 24px;
        height: 17px;
        z-index: 1;
    }
    .footer-locale-select > select{
        width: 100%;
        height: 40px;
        background: #f2f4f7;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        line-height: 2.1;
        color: #717171;
        padding: 0 45px;
        appearance: none;
        font-weight: 500;
    }
    .footer-locale-select > i{
        position: absolute;
        width: 10px;
        height: 15px;
        font-size: 10px;
        line-height: 1.6;
        right: 20px;
        top: 40%;
        transform: translateY(-50%);
        color: #717171;
    }
`;
