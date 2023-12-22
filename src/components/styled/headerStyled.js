import styled from "styled-components";

export const HeaderStyle = styled.div`
width: 100%;
position: fixed;
top: 0;
z-index: 999;
padding-right: initial;
background-color: #fff;
box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
font-family: 'Pretendard';
.nav-gnb-wrap{
    position: relative;
    width: 90%;
    max-width: 1060px;
    margin: 0 auto;
    height: 50px;
}
.nav-gnb{
    height: 100%; 
    display: flex;
    flex-direction: row;
    flew-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.ic-home-wrap{
    flew-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.btn-category-toggle{
    margin-top: -2px;
    margin-right: 15px;
}
.btn-category-toggle > img{
    width: 17px;
    height: 14px;
    object-fit: contain;
}
.ic-logo-home{
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
}


.ul-gnb-wrap{
    height: inherit;
    text-align: center;
    margin: 0;
}
.ul-gnb-wrap > li{
    height: inherit;
    display: inline-block;
} 
.ul-gnb-wrap > li:after{
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
}
.ul-gnb-wrap > li > a{
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    letter-spacing: -0.03em;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    display: inline-block;
}
.ul-gnb-wrap a:hover{
    box-shadow: inset 0 -2px #ddd;
}
.ul-gnb-wrap > li a > em{
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    font-style: normal;
}
.ul-gnb-wrap > li > a > span{
    position: absolute;
    top: 10px;
    right: -7px;
    pointer-events: none;
}

.aside-gnb-sign{
    height: 100%;
    padding: 10px 0;
}
.aside-gnb-sign > ul{
    height: 100%;
    margin: 0;
}
.aside-gnb-sign > ul > li{
    position: relative;
    display: inline-flex;
    height: 100%;
    vertical-align: middle;
}
.btn-gnb-search{
    height: 100%;
    position: relative;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}
.btn-gnb-sign{
    margin-right: 6px;
    padding: 0 3px;
    font-size: 14px;
    letter-spacing: -0.02em;
    height: 100%;
    font-weight: 600;
    color: #333;
}
.btn-alarm-wrapper, btn-profile-wrapper{
    position: relative;
    margin-right: 10px;
    height: 100%;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}
.btn-alarm-active{
    color: #fff !important;
    background-color: #36f;
    border-radius: 50%;
    height: 85%;
    width: 80%;
    margin-top: 4px;
    padding-top: 1px;
    padding: 1px 9px;
}
.span-btn-right{     
    background-color: rgb(51, 102, 255);
    width: 13px;
    height: 13px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: absolute;
    top: 6px;
    left: 25px;
    padding: 0!important;
    display: inline-flex;
    background: #36f;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
.btn-profile-inner{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.btn-profile-blue{
    border: 1px solid #36f;
}
.btn-profile-inner > div{
    background-image: url(https://static.wanted.co.kr/oneid-user/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
}


.menu-popover-wrapper{
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: absolute;
    top: 100%;
    right: -27px;
    margin-top: 13px;
    padding: 0!important;
    display: block;
    transform: translate(50%,8px);
}
.menu-popover{
    overflow: hidden;
    min-width: 194px;
    border-radius: 10px;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;
    font-family: 'Pretendard';
}
.menu-popover-header{
    display: none;
    height: 50px;
    width: 100%;
}
.menu-popover-list{
    padding-top: 14px;
}
.menu-popover-profile{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 34px!important;
    width: 100%;
}
.menu-popover-profile:nth-child(3), .menu-popover-profile:nth-child(7){
    margin-top: 18px;
    border-top: 1px solid #ececec;
} 
.menu-popover-profile:last-child{
    border: 0;
    margin-top: 9px;
    background-color: #f7f7f7;
    overflow: hidden;
    height: 50px!important;
    border-radius: 0 0 10px 10px;
    border-top: 1px solid #ececec;
}
.menu-popover-profile > a{
    vertical-align: bottom;
    font-size: 14px;
    color: #333;
    height: 100%;
    display: flex!important;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: 500!important;
    line-height: normal!important;
    padding: 3px 0px!important;
    width: 100%;
}
.menu-popover-profile > a:hover:before{
    position: absolute;
    content: "";
    display: block;
    top: 2.5px;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 8px;
    background-color: #f7f7f7;
    margin: 0 8px;
    height: 34px;
    z-index: 0;
}
.menu-popover-profile > a > span{
    position: relative;
    vertical-align: middle;
}
.menu-popover-profile:first-of-type > a > span::after{
    content: "";
    position: absolute;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #36f;
    top: 1px;
    right: -5px;
}
.menu-popover-bubblePoint{
    position: absolute;
    right: 45%;
    bottom: 100%;
    height: 11px;
    overflow: hidden;
    margin-bottom: -1px;
    transform: translateX(-47px);
    z-index: 10;
}
.menu-popover-bubblePoint:after{
    content: "";
    margin-top: 4px;
    border: 1px solid #cdcdcd;
    background-color: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    transform: rotate(-55deg) skewX(-20deg);
}


.li-left-division{
    position: relative;
    height: 100%;
    vertical-align: middle;
    align-items: center;
}
.li-left-division:before{
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
}
.li-left-division > a{
    font-size: 13px;
    color: #666;
    line-height: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    padding: 0 10px;
    margin-left: 15px;
    font-weight: 400;
}


.menu-alarm-popover{
    height: 100%;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
    position: absolute;
    top: 40px;
    right: 30px;
    z-index: 10;
    transform: translate(50%,23px);
    width: 395px;
    padding: 0!important;
}
.menu-alarm-popover > div{
    position: relative;
    height: 100%;
    background-color: #fff;
    border-radius: 15px;
    padding-bottom: 57px;
}
.alarm-popover-content{
    width: 100%;
    height: auto;
    max-height: 600px;
    border-radius: 10px;
    border: 1px solid #cdcdcd;
    background-color: #fff;
    overflow-y: auto;
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
}
.alarm-popover-content > ul > li{
    width: 100%;
    position: relative;
    display: block!important;
    height: 100%;
    vertical-align: middle;
}
.alarm-popover-content > ul > li:not(:first-child):before{
    content: "";
    display: block;
    width: 364px;
    height: 1px;
    margin: 0 auto;
    background-color: #ececec;
}
.alarm-popover-content > ul > li > div{
    height: 100%;
    margin: 8px;
    padding: 13px 17px 11px!important;
    min-height: 83px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}
.alarm-popover-content > ul > li > div:hover{
    border-radius: 8px;
    background-color: #f7f7f7;
}
.alarm-popover-content > ul > li > div > a{
    display: flex!important;
    line-height: normal!important;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.alarm-category{
    font-size: 12px;
    font-weight: 500;
    color: #3a68f9;
    margin-bottom: 6px;
    line-height: normal;
}
.alarm-message{
    width: 310px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    line-height: normal;
    margin-bottom: 7px;
}
.alarm-date{
    font-size: 12px;
    color: #767676;
    margin-top: 4px;
    font-weight: 400;
    line-height: normal;
}

.alarm-popover-content > div{
    position: absolute;
    background-color: #939393;
    left: 15px;
    right: 15px;
    bottom: 15px;
    min-height: 48px;
    border-radius: 4px;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    opacity: 1;
    //visibility: hidden;
    transition: .3s;
    z-index: 20;
}
.alarm-popover-bubble{
    position: absolute;
    right: 50%;
    bottom: 100%;
    height: 11px;
    overflow: hidden;
    margin-bottom: -1px;
    transform: translateX(7px);
}
.alarm-popover-bubble:after{
    content: "";
    margin-top: 4px;
    border: 1px solid #cdcdcd;
    background-color: #fff;
    height: 14px;
    width: 14px;
    display: block;
    border-top-right-radius: 30%;
    transform: rotate(-55deg) skewX(-20deg);
}
`;