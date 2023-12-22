import styled from "styled-components";

export const LogWrapper = styled.div`
*{
  font-family: 'Pretendard';
}
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #f7f7f7;
::-webkit-scrollbar { // 스크롤바 숨기기
  display: none;
}
> div{
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 50px auto;
}
.box-log{
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  overflow-x:hidden;
}
.box-title-wrapper{
  padding: 0 20px;
  height: 64px;
  flex: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.box-log-title{
  width: 230px;
  display: flex;
  margin-right: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.box-log-title > span{
  display: flex;
  align0items: inherit;
  justify-content: inherit;
}

.box-content-wrapper{
  overflow: auto;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
}
.box-content-wrapper::-webkit-scrollbar { // 스크롤바 숨기기
  display: none;
}

form > h1{
  color: #000;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.024em;
  font-size: 28px;
  line-height: 38px;
}
form > h2{
  color: #888;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.0096em;
  font-size: 15px;
  line-height: 22px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.box-label-wrapper{
  margin: 17px 0px 7px;
}
.box-label-wrapper > label{
  color: #888;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.0145em;
  font-size: 14px;
  line-height: 20px;
}
.input-email{
  width: 332px;
  height: 50px;
  min-height: 50px;
  padding: 0px 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid #e1e2e3;
  color: #333;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  border: 1px solid #36f;
}
.input-email:focus{
  border: 1px solid #36f;
}
.input-email-false{
  width: 332px;
  height: 50px;
  min-height: 50px;
  padding: 0px 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid #e1e2e3;
  color: #333;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
}
.input-email-false:focus{
  border: 1px solid #fe415c;
}
.input-email-false::placeholder{
  color: #ccc;
}

.text-email-validate{
  color: #fe415c;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.0192em;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 8px;
  margin-top: 0px;
}

.btn-login{
  color: #36f;
  background-color: #36f;
  border: none;
  cursor: poiner;
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 30px;
}
.btn-login > span{ 
  color: #fff;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.0056em;
  font-size: 16px;
  line-height: 24px;
}
.btn-login-disabled{
  color: #ccc;
  background-color: #f2f4f7;
  border: none;
  cursor: default;
  width: 100%;
  height: 50px;
  min-height: 50px;
  border-radius: 25px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 30px;
}
.btn-login-disabled > span{
  color: #ccc;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.0056em;
  font-size: 16px;
  line-height: 24px;
}
.text-login-type{
  color: #939393;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.025em;
  font-size: 12px;
  line-height: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.box-social-wrapper{
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 360px;
  justify-content: center;
}
.btn-social-login{
  flex: 1;
  margin: 0;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0px;
}
.btn-social-login > span{
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
.btn-social-login > span > svg{
  width: 56px;
  height: 56px;
}
.btn-social-login > p{
  margin-top: 8px;
  margin-bottom: 0;
  color: #888;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.031em;
  font-size: 11px;
  line-height: 14px;
  text-transform: capitalize;
}

form > hr{
  border: none;
  width: 100%;
  border-bottom: 1px solid #e1e2e3;
  margin-top: 40px;
  margin-bottom: 40px;
}

.box-info-wrapper{
  margin: 30px auto 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.box-info-wrapper > a:first-of-type{
  margin-right: 12px;
}
.box-info-wrapper > a{
  color: #767676;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.0192em;
  font-size: 13px;
  line-height: 18px;
}

.text-copyright{
  color: #888;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.025em;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 30px;
}

.box-language-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.box-language-wrapper > div{
  width: 140px;
  position: relative;
}
.box-language-wrapper > div > img{
  position: absolute;
  left: 15px;
  top: 9px;
  width: 23px;
  height: 16px;
  border-radius: 2px;
  z-index: 1;
  border: 1px solid #e1e2e3;
}
.box-select-wrapper{
  border-radius: 5px;
  width: 100%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  margin-bottom: 10px;
  position: relative;
  height: 34px;
  min-height: 34px;
}
.box-select-wrapper > select{
  padding-left: 45px;
  font-size: 13px;
  font-weight: 600;
  width: 100%;
  position: absolute;
  left: 0;
  appearance: none;
  height: 100%;
  border: none;
  background: none;
  z-index: 1;
  color: #333;
}
.arrow-select-inside{
  position: absolute;
  right: 13px;
  font-size: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.arrow-select-inside > span{
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
.arrow-select-inside > span > svg{
  width: 1em;
  height: 1em;
}
`;

export const SvgStyled = styled.svg`
user-select: none;
display: inline-block;
fill: currentColor;
flex-shrink: 0;
font-size: inherit;
height: 17px;
width: 140px;
`;