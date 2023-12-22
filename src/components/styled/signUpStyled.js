import styled from "styled-components";

export const LogWrapper = styled.div`
*{
    font-family: 'Pretendard';
}
width: 100%;
height: 100%;
margin: 50px auto;
display: flex;
justify-content: center;
align-items: center;
background-color: #f7f7f7;
> div{
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
.box-signup{
    border-radius: 5px;
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: 1px solid #e1e2e3;
}

.box-title-wrapper{
    padding: 0 20px;
    height: 64px;
    flex: none;
    width: 358px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.btn-cancel-wrapper{
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 17px;
}
.btn-cancel-wrapper > button{
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
    color: #000;
}
.btn-cancel-wrapper > button > p{
    color: #000;
    text-align: center;
    letter-spacing: -0.002em;
    line-height: 26px;
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 17px;   
}

.box-sign-title{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.box-sign-title > p{
    color: #000;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.002em;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
}
.box-title-inner{
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
}
.box-content-wrapper{
    overflow: auto;
    position: relative;
    padding: 20px;   
}
.box-content-wrapper::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
.input-disabled{
    color: #ccc;
    background-color: #f2f4f7;
    width: 332px;
    height: 50px;
    min-height: 50px;
    padding: 0px 12px;
    outline: none;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
}
.input-form{
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
.input-disabled::placeholder, .input-form::placeholder{
    color: #ccc;
}
.text-validate{
    color: #f3415c;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0192em;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 8px;
    margin-top: 0px;
}
.text-validate-confirm{
    color: #08ba9c;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0192em;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 8px;
    margin-top: 0px;
}
}

.select-country-wrapper{
    height: 50px;
    min-height: 50px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #e1e2e3;
    background-color:#fff;
    margin-bottom: 10px;
    position: relative;
}
.select-country{
    padding-left: 12px;
    width: 100%;
    position: absolute;
    left: 0;
    appearance: none;
    height: 100%;
    border: none;
    background: none;
    z-index: 1;
    font-size: 16px;
    color: #333;
    font-weight: 400;
}
.select-arrow-wrapper{
    position: absolute;
    right: 20px;
    font-size: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.select-arrow-wrapper > span{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}

.input-mobile-wrapper{
    display: flex;
    flex-direction: row;
    position: relative;
}
.btn-mobile-authentication{
    border: 1px solid #f2f4f7;
    color: #ccc;
    background-color: #f2f4f7;
    cursor: default;
    height: 50px;
    min-height: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 0px 15px;
    width: auto;
    flex: 0 0 auto;
    border-radius: 5px;
}
.btn-mobile-authentication > span{
    color: #ccc;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    line-height: 24px;
    font-size: 16px;
}
.btn-mobile-authentication-confirm{
    height: 50px;
    min-height: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #fff;
    margin-left: 10px;
    padding: 0px 15px;
    width: auto;
    flex: 0 0 auto;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
}
.btn-mobile-authentication-confirm > span{
    color: #36f;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    line-height: 24px;
    font-size: 16px;
}

.text-password-info{
    color: #888;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0192em;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-top: 0px;
}

.box-agree-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 25px;
    width: 100%;
    margin: 28px 0px 10px;
}
.box-agree-list{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 25px;
    width: 100%;
    margin: 10px 0px;
}
.box-agree-check{
    width: 18px;
    height: 18px;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #ececec;
}
.input-checkbox{
    opacity: 0;
    width: calc(100% - 90px);
    height: 100%;
    position: absolute;
    cursor: pointer;
}
.text-agree-content{
    display: flex;
    flex: 1 1 0%;
}
.text-agree-content-all{
    color: #333;
    font-weight: 600;
    text-align; left;
    letter-spacing: 0.0096em;
    font-size: 15px;
    line-height: 22px;
    margin: 0px 0px 0px 7px;
    word-break: keep-all;
}
.text-agree-content > p{
    color: #888;
    font-weight: 500;
    text-align; left;
    letter-spacing: 0.0096em;
    font-size: 15px;
    line-height: 22px;
    margin: 0px 0px 0px 7px;
    word-break: keep-all;
}
.link-agree-more{
    color: #888;
    font-weight: 600;
    text-align; left;
    letter-spacing: 0.0096em;
    font-size: 15px;
    line-height: 22px;
    margin: 0px;
    cursor: pointer;
}

.hr-divider{
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    width: 100%;
    border-bottom: 1px solid #e1e2e3;
}

.check-info-list{
    display: flex;
    margin-left: 28px;
}
.check-info-list > label{
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    cursor: pointer;
}
.check-info-list > label > input{
    display: none;
}
.check-info-list > label > span{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
.check-info-list > label > span > svg{
    color: rgb(136, 136, 136);
    margin-right: 7px;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
}
.check-info-list > label > p{
    color: #888;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-hegiht: 24px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.btn-add-wrapper{
    z-index: 10;
    position: sticky;
    bottom: 0px;
}
.btn-add-wrapper > div:first-of-type{
    position: absolute;
    inset: 30px 0px -20px;
    background: #fff;
    z-index: -1;
}
.btn-add-wrapper > div:nth-of-type(2){
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 60px;
    height: 30px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #fff 100%);
    z-index: -1;
    pointer-events: none;
}
.btn-add-user{
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
.btn-add-user > span{
    color: #ccc;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;;
    font-size: 16px;
    line-height: 24px;
}
.btn-add-user-active{
    color: #ccc;
    background-color: #36f;
    border: none;
    cursor: default;
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 30px;
    cursor: pointer;
}
.btn-add-user-active > span{
    color: #fff;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;;
    font-size: 16px;
    line-height: 24px;
}

.input-border-true:focus{
   border: 1px solid #36f !important; 
}
.input-border-false:focus{
    border: 1px solid #fe415c !important;
}
`;