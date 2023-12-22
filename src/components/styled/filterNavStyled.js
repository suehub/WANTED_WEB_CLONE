import styled from "styled-components";
import Slider from "react-slick";

export const StyledContainer = styled.div`
font-family: 'Pretendard';

.nav-filter-wrapper{
  margin-bottom: 25px;
  padding-top: 10px;
}
.nav-filter-wrapper-fixed{
  width: 100%;
  margin: 0 auto 25px auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 50px;
  border-bottom: 1px solid #36f;
  background: #fff;
  z-index: 2;
  padding: 30px 0 25px!important;
}
.nav-filter-wrapper-fixed > div{
  width: 87.72%;
}

.nav-filter-inner{
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.select-group-wrapper{
  display: flex;
  align-items: center;
  flex: auto;
  justify-content: left;
  max-width: none;
}

.btn-filter{
  align-items: center;
  display: inline-flex;
  height: 40px;
  padding: 0 15px!important;
  margin-bottom: 0;
  border-radius: 5px;
  border: 1px solid #ececec;
  position: relative;
}
.btn-title-filter{
  margin-right: 15px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  color: #333;
  white-space: nowrap;
}
.span-count-filtered{
  position: absolute;
  top: 4px;
  right: 0;
  transform: translate(50%,-50%);
  background-color: #36f;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 7px;
  z-index: 1;
}
.btn-display-filter{
  color: #36f!important;
  font-weight: 600;
  margin-right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: normal;
  white-space: nowrap;
}

.btn-filter-year, .btn-filter-skill{
  position: relative;
  margin-right: 10px;    
  margin-left: 10px;
}
.btn-filter > svg{
  margin-left: 8px;
  transition: .3s;
}


.btn-filter-sort{
  height: 40px;
  margin-left: auto;
  position: relative;

}
.btn-filter-sort > div{
  position: relative;
}
.selector-custom-wrapper{
  width: 104px;
  position: relative;

}
.selector-custom-wrapper > button{
  border-radius: 4px;
  border: 1px solid #ececec;
  background-color: #fff;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  letter-spacing: normal;
  color: #000;
  padding: 0 16px;
  position: relative;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.svg-sort-toggle{
  transition: .3s;
}
.svg-sort-toggle-active{
  transform: rotate(180deg);
}
.selector-custom-wrapper > ul{
  position: absolute;
  display: block;
  top: 39px;
  left: 0;
  right: 0;
  z-index: 98;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 0 0 4px 4px;
}
.selector-custom-wrapper > ul > li > button{
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: normal;
  color: #333;
  text-align: left;
  padding: 0 0 0 16px;
  border-bottom: 1px solid #ececec;
}

.hr-filter-divider{
  height: 1px;
  max-width: 1060px;
  border: none;
  margin: 25px auto;
  background-color: rgba(236,236,236,.7);
}

.tag-filter-wrapper{
  max-width: 1060px;
  margin: 0 auto;
}
.nav-filter-wrapper-fixed > section{
  max-width: 1060px !important;
  margin: 0 auto!important;
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
  width: 100%;
  margin-bottom: 0;
}
.slick-track{
  padding-left: 50px;
  width: 2968px !important;
}
.slick-list:before{
  left: 0;
  background: linear-gradient(270deg,hsla(0,0%,100%,0),#fff 50%);
}
.slick-list:after{
  right: 0;
  background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%);
}
.slick-list:before, .slick-list:after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 80px;
  height: 32px;
}
.slick-slide{
  width: auto !important;
  margin-right: 8px;
}
.btn-tag-slider{
  position: relative;
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-flex !important;
  background: rgb(242, 251, 245);
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent; 
  box-sizing: border-box;
}
.btn-tag-slider:hover{
  border: 1px solid rgba(51,102,255,.3);
}
.btn-tag-slider > img{
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

`;

const SliderButton = styled.button`
position: absolute;
//top: 50%;
z-index: 10;
//transform: translateY(-50%);
width: 30px;
height: 30px;
border: 1px solid #e1e2e3;
border-radius: 9999px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-top: -10px;
> span{
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
`;

export const PrevButton = styled(SliderButton)`
top: 132px;  
left: 0px;
`;

export const NextButton = styled(SliderButton)`
top: 134px;  
right: -2px;
`;

export const PrevButtonScroll = styled(SliderButton)`
top: 132px;  
left: 230px;
`;

export const NextButtonScroll = styled(SliderButton)`
top: 134px;  
right: 230px;
`;