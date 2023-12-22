import styled from "styled-components";
import Slider from "react-slick";

export const Header = styled.header`
margin-bottom: 4px;
position: relative;
font-family: 'Pretendard';

.header-title-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    gap: 10px;
    padding-top: 60px;
    padding-bottom: 40px;
    transform: translateX(-15px);
}
.header-title-logo > img{
    margin-bottom: 3px;
    transform: translateY(10px);
    width: 170px;
}
.header-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: normal;
    text-align: left;
    color: #111;
}
.header-title-main{
    margin-bottom: 6px;
    text-align: center;
}
.header-title-main > img{
    margin-bottom: 3px;
    width: 114px;
    vertical-align: -4px;
    margin-right: 3px;
}
.btn-header-title{
    position: relative;
    z-index: 1;
    margin-left: 5px;
}
.btn-header-title > svg{
    vertical-align: -4px;
    width: 24px;
    height: 24px;
}
`;

export const Container = styled.article`
max-width: 100vw;
width: 100%;
background: #f4f8fb;
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 60px;
margin: 0 auto;
position: relative;
background-image: url(https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-dev.static.wanted.co.kr%2Fbanner%2FJobsfeed_ai_banner.png&w=1440&q=75);
font-family: 'Pretendard';

.container-matched{
    flex-direction: column;
    background-color: transparent;
    padding: 0;
    margin: 0 auto;
    grid-gap: 20px;
    gap: 20px;
    max-width: 1060px;
    border-radius: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container-matched > h3{
    color: #555;
    font-size: 16px;
    line-height: 19.2px;
    word-break: keep-all;
}
.container-matched > button{
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 700;
    color: #fefefe;
    line-height: 22px;
    flex: 0 0 auto;
    margin-left: -15px;
    box-sizing: border-box;
}

`;

export const SectionStyled = styled.section`
padding: 30px 0;
font-family: 'Pretendard';

> div{
    max-width: 1060px;
    width: 90%;
    margin: 0 auto;
}

.header-title-main{
    margin-bottom: 6px;
    text-align: center;
}
.header-title-main > img{
    margin-bottom: 3px;
    width: 114px;
    vertical-align: -4px;
    margin-right: 3px;
}
.btn-header-title{
    position: relative;
    z-index: 1;
    margin-left: 5px;
}
.btn-header-title > svg{
    vertical-align: -3px;
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
    font-size: 15px;
    font-weight: 400;
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

`;

export const SliderStyled = styled(Slider)`
font-family: 'Pretendard';

// 기존 버튼 기능 삭제
.slick-prev::before, .slick-next::before {
    opacity: 0;
    display: none;
}

.slick-slider{
    margin-bottom: 30px;
}
.slick-slide{
    float: left;
    height: 100%;
    min-height: 1px;
}
.box-slider-wrapper > div{
    padding: 10px !important;
}

`;

export const SectionButtonStyle = styled.button`
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

export const PopupStyled = styled.div`
top: 170px;
right: calc(50% - 210px);
margin-left: 0;
margin-top: -5px;
margin-right: 4px;
width: auto;
background-color: #fff;
border: 1px solid #999;
position: absolute;
padding: 0 16px 15px;
color: #333;
z-index: 3;

.container-popup-divider{
margin: 0;
height: 1px;
flex-shrink: 0;
border: none;
background-color: #ededed;
}
.container-popup-title {
margin-top: 20px;
font-weight: 600;
font-size: 13px;
}
.container-popup-title > img{
margin-bottom: 0px;
}
.btn-popup-close{
display: block!important;
position: absolute;
top: 11px;
right: 11px;
}
.container-popup-description{
margin-top: 5px;
font-size: 12px;
line-height: normal;
letter-spacing: normal;
}
.container-popup-go{
margin-top: 5px;
align-items: stretch;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-content: stretch;
align-items: flex-end;
border-radius: 4px;
}
.container-popup-go > div{
order: 0;
flex: 0 1 auto;
align-self: auto;
font-size: 13px;
font-weight: 600;
color: #111;
}
.container-popup-go > div > a{
margin-right: 5px;
vertical-align: middle;
font-size: 12px;
font-weight: 600;
color: #3466ff!important;
}
`;

export const LogPopupStyled = styled(PopupStyled)`
position: absolute;
top: 750px;
right: 560px;
margin-left: 0;
margin-top: -5px;
margin-right: 4px;
width: 324.38px!important;
background-color: #fff;
border: 1px solid #999;
color: #333;
z-index: 3;
padding: 0 16px 15px;
`;