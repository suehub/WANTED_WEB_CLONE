import styled from "styled-components";

export const Container = styled.div`
padding-bottom: 100px;
margin: 50px auto 0 auto;
width: 87.72%;
position: relative;
max-width: 1060px;
font-family: 'Pretendard';
.content.container{
    margin: 0 auto;
    max-width: 1060px;
    position: relative;
}
`;
export const AsideStyled = styled.aside`
top: 100px;
left: 0;
width: 250px;
position: absolute;
padding: 42px 20px 41px;
border: 1px solid #e1e2e3;
border-radius: 3px;
background-color: #fff;
margin-bottom: 0;
box-sizing: border-box;
font-family: 'Pretendard';

.aside-header{
    width: 100%;
    text-align: center;
}
.aside-avatar{
    line-height: 1.4;
}
.aside-avatar-img{
    display: inline-block;
    position: relative;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-size: cover;
    background-position: 50%;
}
.aside-me{
    margin-top: 31px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.07;
    color: #999;
}
.aside-me-name, .aside-me-email{
    line-height: 1.3;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.aside-me-name{
    font-size: 18px;
    font-weight: 600;
    color: #333;
}
.aside-me-email{
    margin-top: 20px;
}
.aside-me-tel{
    margin-top: 10px;
}
.aside-edit{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #e1e2e3;
    margin: 30px auto 0;
    font-size: 16px;
    line-height: .94;
    color: #333;
}
.matchup-status-wrapper{
    margin-top: 42px;
}
.matchup-status-wrapper > a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 23px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.06;    
}
.matchup-status-wrapper > a:first-of-type{
    margin-top: 0;
}
.matchup-status-wrapper > a > span{
    word-break: break-word;
    line-height: 22px;
}
.matchup-status-wrapper > a > strong{
    font-size: 18px;
    font-weight: 600;
}
`;

export const SectionStyled = styled.section`
padding-left: 270px;
margin-top: -13px;
font-family: 'Pretendard';

.banner-career-connect{
    position: relative;
    width: 100%;
    height: 103px;
    border-radius: 10px;
    margin-bottom: 20px;
    background: #2b4bc8;
    cursor: pointer;
    overflow: hidden;
}
.banner-career-connect > picture{
    z-index: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.banner-career-connect > picture > img{
    width: 100%;
    height: 100%;
}
.btn-banner-career{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 32px 40px;
    font-size: 22px;
    font-weight: 800;
    line-height: 26px;
    color: #fff;
}
.btn-banner-career > div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn-banner-career > div > p{
    z-index: 1;
}
.btn-banner-career > div > strong{
    z-index: 1;
    border-radius: 20px;
    background-color: #fff;
    color: #2b4bc8;
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    padding: 11px 20px;
}
.btn-banner-career > div > picture{
    width: 288px;
    height: 90px;
    bottom: 0;
    right: 200px;
    z-index: 0;
    position: absolute;
}
.btn-banner-career > div > picture > img{
    width: 100%;
    height: 100%;
}
.info-setting-container{
    position: relative;
}
.info-setting-container > div{
    padding: 41px 0 30px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    background-color: #fff;
}
.form-header{
    padding-right: 30px;
    padding-left: 30px;
}
.form-title > dt{
    color: #333;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
}
.btn-form-matchup {
    position: absolute;
    top: 35px;
    right: 32px;
    font-size: 16px;
    font-weight: 400;
    color: #999;
}
.btn-form-matchup > span{
    position: relative;
    top: 6px;
    margin-left: 10px;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
}
.form-block{
    margin-top: 43px;
}
.form-block > div{
    padding-right: 30px;
    padding-left: 30px;
}
.form-block-button{
    display: block;
    position: relative;
    padding: 15px 0;
}
.form-block-button > h6{
    position: absolute;
    top: 50%;
    left: 0;
    width: 150px;
    padding-right: 10px;
    color: #999;
    font-size: 16px;
    line-height: inherit;
    transform: translateY(-50%);
}
.form-block-button > button{
    width: calc(100% - 150px);
    padding: 12px 0;
    margin-left: 150px;
    position: relative;
    color: #ccc;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    border: 0;
    border-bottom: 1px solid #e1e2e3;
}
.form-block-button > button > span{
    top: 50%;
    right: 0;
    position: absolute;
    color: #999;
    font-size: 24px;
    transform: translateY(-50%);
}
.form-block-period{
    margin-top: 5px;
    margin-bottom: 25px;
    padding-left: 150px;
    position: relative;
}
.select-not-value{
    color: #ccc;
}
.select-year{
    min-width: 38px;
    appearance: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    padding: 0;
}
.month-dot{
    margin: 0 4px;
}
.select-month{
    appearance: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    padding: 0;
}
.term-dash{
    margin: 0 10px;
}
.checkbox-served-wrapper{
    margin-top: 14px;
}
.checkbox-served-wrapper > input{
    margin: 4px 5px 0 0;
    line-height: normal;box-sizing: border-box;
    padding: 0;
}
.checkbox-served-wrapper > span{
    font-size: 14px;
    font-weight: 400;
    color: #999;
}
.form-block-label{
    width: 100%;
    margin-top: 15px;
}
.form-block-label > h6{
    font-size: 16px;
    font-weight: 400;
    color: #999;
    margin-bottom: 11px;
}
.form-block-label > p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1.57;
    color: #ccc;
    margin-bottom: 17px;
}
.form-block-label > textarea{
    width: 100%;
    height: 192px;
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.63;
    vertical-align: top;
    color: #333;
    box-sizing: border-box;
}
textarea {
    resize: none;
    outline: none;
}
.form-footer{
    padding-right: 30px;
    padding-left: 30px;
    margin-top: 45px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #e1e2e3;
    padding: 15px 0;
    text-align: right;
}
.form-footer > div{
    width: 1060px;
    margin: 0 auto;
}
.form-footer button{
    width: 190px;
    height: 50px;
    border-radius: 3px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    margin-left: 20px;
    box-sizing: border-box;
}
.form-footer button:first-of-type{
    background: #fff;
    border: 1px solid #e1e2e3;
    color: #333;
}
.form-footer button:first-of-type > span{
    display: inline-block;
    position: absolute;
    top: 28px;
    left: 910px;
}
.form-footer button:last-of-type{
    background-color: #ccc;
}

`;