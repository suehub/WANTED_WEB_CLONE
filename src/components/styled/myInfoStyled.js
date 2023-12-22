import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
font-family: 'Pretendard';
p {
    margin-block-start: 1em;
    margin-block-end: 1em;
}
.header-wrapper{
    display: flex;
    width: 100%;
    height: 50px;
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
}
.header-wrapper > div{
    max-width: 1060px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
}
.home-logo{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
.home-logo > svg{
    user-select: none;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: inherit;
    height: 17px;
    width: 140px;
}
.header-right{
    display: flex;
    margin-left: auto;
    align-items: center;
}
.ic-menu{
    position: relative;
}
.ic-menu > button{
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    background-color: #fff;
    border: none;
    width: auto;
    margin: 0px;
}
.ic-menu > button > span{
    color: #939393;
}
.ic-menu > button > span:first-of-type{
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px;
}
.ic-menu > button > span:last-of-type{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
.ic-menu > button > span:last-of-type > svg{
    width: 1.5em;
    height: 1.5em;
    user-select: none;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: inherit;
}
.header-divider{
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-image: initial;
    border-left: 1px solid #e1e2e3;
    height: 10px;
    margin: auto 15px;
}
.btn-log-out{
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    background-color: #fff;
    border: none;
    width: auto;
    margin: 0px;
}
.btn-log-out > span{
    color: #939393;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px;
}

.content-container{
    max-width: 628px;
    width: 628px;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
.profile-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
}
.profile-img{
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    position: relative;
    width: 80px;
    height: 80px;
}
.profile-img > img{
    position: absolute;
    left: -1px;
    top: -1px;
    overflow: hidden;
    border-radius: 50%;
    width: 80px;
    height: 80px;
}
.profile-img > label{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    right: -7px;
    bottom: -7px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background : #36f;
    color: #fff;
}
.profile-img > label > span{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
.profile-img > label > span > svg{
    user-select: none;
    width: 15px;
    height: 15px;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: inherit;
}
.profile-section > p{
    color: #000;
    font-weight: 400;
    text-align: center;
    letter-spacing: -0.0236em;
    font-size: 28px;
    line-height: 38px;
    margin-top: 15px;
    margin-bottom: 0px;
}


.acount-section{
    width: 100%;
    border: 1px solid #e1e2e3;
    border-radius: 8px;
    padding: 0px 20px;
    margin-bottom: 30px;
}
.acount-section > p:first-of-type, .service-section > p:first-of-type{
    color: #000;
    font-weight: 600;
    text-align: left;
    letter-spacing: -0.0195em;
    font-size: 22px;
    line-height: 28px;
}
.acount-section > p:last-of-type, .service-section > p:last-of-type{
    color: #767676;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px;
}
.acount-section > ul{
    padding: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
}
.acount-section > ul > li{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.acount-section > ul > li:not(:first-child){
    border-top: 1px solid #e1e2e3;
}
.acount-section > ul > li > p:first-of-type{
    color: #000;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px;
    min-width: 120px;
    margin-right: 15px;
}
.acount-section > ul > li > p:last-of-type{
    color: #333;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px;
    flex: 1 1 0%;
    margin-right: 10px;
    word-break: break-all;
}
.acount-section > ul > li > span{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}


.service-section{
    border: 1px solid #e1e2e3;
    border-radius: 8px;
    padding: 0px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.ic-id-share{
    display: grid;
    grid-template-columns: repeat(auto-fit, 88px);
    width: 100%;
    justify-content: center;
    gap: 15px;
    margin-bottom: 45px;

}
.ic-id-share > a{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80px;
    width: 60px;
}
.ic-id-share > a > div{
    height: 60px;
    width: 60px;
    border-radius: 12px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.ic-id-share > a > div > img{
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}
.ic-id-share > a > p{
    color: #333;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 0px;
}


.footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 15px auto;
    justify-content: center;
    align-items: center;
}
.footer > p{
    color: #888;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0192em;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 30px;
}
.footer > div:first-of-type{
    display: flex;
}
.footer > div:first-of-type > a{
    color: #000;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.025em;
    font-size: 12px;
    line-height: 16px;
}
.footer > div:first-of-type > a:first-of-type{
    margin-right: 12px;
}
.footer > div:last-of-type{
    display: flex;
    width: 100%;
    justify-content: center;
}
.footer > div:last-of-type > div{
    width: 140px;
    position: relative;
}
.footer > div:last-of-type > div > img{
    position: absolute;
    left: 15px;
    top: 9px;
    width: 23px;
    height: 16px;
    border-radius: 2px;
    z-index: 1;
    border: 1px solid #e1e2e3;
}
.footer-select{
    border-radius: 5px;
    width: 100%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    margin-bottom: 10px;
    position: relative;
    height: 34px;
    min-height: 34px;
}
.footer-select > select{
    padding-left: 45px;
    font-size: 13px;
    font-weight: 600;
    width: 100%;
    position: absolute;
    left: 0px;
    appearance: none;
    height: 100%;
    border: none;
    background: none;
    z-index: 1;
    color: #333;
}
.footer-select > div{
    position: absolute;
    right: 13px;
    font-size: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.footer-select > div > span{
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}
.footer-select > div > span > svg{
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: inherit;
}
`;


export const ToastMessage = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 0px;
    bottom: 0px;
    z-index: 1300;
    font-family: 'Pretendard';
    box-sizing: border-box;

    > div{
        width: 350px;
        position: relative;
        transition: bottom 0.3s ease 0s;
        display: flex;
        flex-direction: row;
        padding: 15px;
        border-radius: 8px;
        background-color: #333;
        //visibility: hidden;
        // opacity: 0;
        bottom: 0px;
        box-sizing: border-box;
    }
    .ic-success-wrapper{
        display: flex;
        margin-right: 13px;
        font-size: 21px;
    }
    .ic-success-wrapper > span{
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        font-size: inherit;
    }
    .text-update-success{
        display: flex;
        flex: 1 1 0%;
        align-items: flex-start;
    }
    .text-update-success > p{
        margin: 0;
        color: #fff;
        font-weight: 400;
        text-align: left;
        letter-spacing: 0.0096em;
        font-size: 15px;
        line-height: 22px; 

    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.4);
    font-family: 'Pretendard';
    box-sizing: border-box;

    > div{
        width: 100%;
        max-width: 400px;
        min-height: 200px;
        border-radius: 8px;
        background-color: #fff;
        box-sizing: border-box;
    }
    .modal-header{
        padding: 0px 20px;
        height: 64px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-sizing: border-box;
    }
    .box-header-left{
        min-width: 64px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 400;
        font-size: 17px;
    }
    .modal-header-title{
        display: flex;
        flex: 1 1 0%;
        justify-content: center;
        align-items: center;
    }
    .modal-header-title > p{
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
    .modal-header-title > p > p{
        color: #000;
        font-weight: 600;
        text-align: left;
        letter-spacing: -0.002em;
        font-size: 18px;
        line-height: 26px;
    }
    .btn-close-wrapper{
        display: flex;
        min-width: 64px;
        justify-content: flex-end;
        align-items: center;
    }
    .btn-close-wrapper > button{
        border: none;
        background: none;
        cursor: pointer;
        padding: 8px;
        margin: -8px;
        fill: #000;
    }
    .btn-close-wrapper > button > span{
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
    .btn-close-wrapper > button > span > svg{
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: inherit;
        flex-shrink: 0;
        font-size: 20px;
    }

    .modal-body{
        padding: 0px 20px 20px;
        box-sizing: border-box;
    }
    .modal-body-content{
        margin: 30px 0px;
        box-sizing: border-box;
    }
    .modal-body-select{
        height: 50px;
        min-height: 50px;
        border-radius: 5px;
        width: 100%;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        margin-bottom: 10px;
        position: relative;
    }
    .modal-body-select > select{
        padding-left: 12px;
        width: 100%;
        position: absolute;
        left: 0px;
        appearance: none;
        height: 100%;
        border: none;
        background: none;
        z-index: 1;
        font-size: 16px;
        color: #333;
        font-weight: 400;
    }

    .modal-body-select > div{
        position: absolute;
        right: 20px;
        font-size: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .modal-body-select > div > span{
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
    .modal-body-select > div > span > svg{
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        font-size: inherit;
    }

    .modal-tel-input{
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .modal-tel-input > input{
        width: 100%;
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
    .modal-tel-input > input:readonly{
        color: #ccc;
        background-color: #f2f4f7;
        opacity: 1;
    }
    .modal-tel-input > button{
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
    .modal-tel-input > button > span{
        color: #36f;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0056em;
        font-size: 16px;
        line-height: 24px;
    }
    .modal-tel-change{
        border: 1px solid #e1e2e3;
        color: #ccc!important;
        background-color: #fff;
        cursor: pointer;
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
    .modal-tel-disabled{
        color: #ccc!important;
        border: 1px solid #f2f4f7!important;
        background-color: #f2f4f7!important;
        cursor: default;
    }
    .modal-tel-disabled > span{
        color: #ccc!important;
    }

    .modal-num-input{
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .modal-num-input > input{
        width: 100%;
        height: 50px;
        min-height: 50px;
        padding: 0px 12px;
        outline: none;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
        color: #333;
    }
    .modal-num-input > input:readonly{
        color: #ccc;
        background-color: #f2f4f7;
        opacity: 1;
    }
    .modal-body-content > div > p{
        color: #08ba9c;
        font-weight: 400;
        text-align: left;
        letter-spacing: 0.0192em;
        font-size: 13px;
        line-height: 18px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .modal-btn-wrapper{
        display: flex;
        justify-content: right;
    }
    .btn-modal{
        height: 50px;
        min-height: 50px;
        border-radius: 25px;
        font-size: 16px;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #e1e2e3;
        width: auto;
        padding: 0px 32px;
        margin-left: 8px;
    }
    .btn-modal-active{
        background-color: #36f !important;
    }
    .btn-modal-active > span{
        color: #fff !important;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0056em;
        font-size: 16px;
        line-height: 24px;
    }
    .btn-modal-disabled{
        color: #ccc;
        background-color: #f2f4f7;
        border: none;
        cursor: default;
        height: 50px;
        min-height: 50px;
        border-radius: 25px;
        font-size: 16px;
        margin-bottom: 10px;
        cursor: default;
        background-color: #fff;
        border: 1px solid #e1e2e3;
        width: auto;
        padding: 0px 32px;
        margin-left: 8px;
    }
    .btn-modal > span{
        color: #36f;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0056em;
        font-size: 16px;
        line-height: 24px;
    }
    .btn-modal-disabled > span{
        color: #ccc;
    }
    .modal-body-content > div{
        margin: 17px 0px 7px;
    }
    .modal-body-content > div > label{
        color: #888;
        font-weight: 600;
        text-align: left;
        letter-spacing: 0.0145em;
        font-size: 14px;
        line-height: 20px; 
    }
    .modal-body-content > input{
        width: 360px;
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
        box-sizing: border-box;
    }
    .modal-body-info{
        color: #888;
        font-weight: 400;
        text-align: left;
        letter-spacing: 0.0192em;
        font-size: 13px;
        line-height: 18px;
        margin-top: 0px; 

    }


    .modal-input-true:focus{
        border: 1px solid #36f;
    }
    .modal-input-false:focus{
        border: 1px solid #fe415c;
    }
    .modal-input-info{
        color: #fe415c!important;
        font-weight: 400;
        text-align: left;
        letter-spacing: 0.0192em;
        font-size: 13px;
        line-height: 18px; 
        margin-bottom: 8px;
        margin-top: 0px;
    }
    .text-validate{
        color: #fe415c;
    }
    .text-validate-confirm{
        color: #36f;
    }
    .input-disabled{
        color: #ccc;
        background-color: #f2f4f7;
    }
    
`;

export const DeleteModal = styled.div`
position: fixed;
top: 0px;
left: 425px;
max-width: 628px;
width: 628px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1000;
background: rgba(0, 0, 0, 0.4);

*{
    font-family: 'Pretendard';
    box-sizing: border-box;
}
p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
> div{
    margin-top: 30px;
}
> div > div{
    border-radius: 5px;
    width: 100%;
    max-height: calc(100vh - 100px);
    overflow: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #e1e2e3;
}
> div > div > div::-webkit-scrollbar {
    display: none;
}
> div > div > div{
    overflow: auto;
    position: relative;
    padding: 20px;
}
.modal-content-wrapper{
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
    margin-top: 30px;
}
.modal-content-wrapper > h1{ 
    color: #000;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.0195em;
    font-size: 22px;
    line-height: 28px; 
}
.modal-content-info > p:first-of-type{
    color: #000;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: 14px;
    line-height: 20px; 
}
.modal-content-info > p:last-of-type{
    color: #000;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: 14px;
    line-height: 20px; 
    text-indent: -8px;
    margin-left: 8px;
}
.modal-content-divider{
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid #e1e2e3;
    width: 100%;
}
.modal-content-user > p, .delete-data-info > p{
    color: #000;
    font-weight: 600;
    text-align: left;
    letter-spacing: -0.002em;
    font-size: 18px;
    line-height: 26px; 
}
.modal-content-user > div{
    padding: 9px 12px;
    min-height: 50px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #e1e2e3;
    margin-bottom: 30px;
    flex-direction: row;
}
.modal-content-user > div > div{
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    position: relative;
    width: 32px;
    height: 32px;
}
.modal-content-user > div > div > img{
    position: absolute;
    left: -1px;
    top: -1px;
    overflow: hidden;
    border-radius: 50%;   
}
.modal-content-user > div > p{
    color: #000;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px; 
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 8px;
}
.delete-data-info > div{
    display: flex;
    align-items: center;
}
.ic-wanted-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 80px;
    width: 60px;
}
.ic-wanted-logo > div{
    height: 60px;
    width: 60px;
    border-radius: 12px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.ic-wanted-logo > div > img{
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}
.delete-data-info > div > p{
    color: #000;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px; 
    min-width: 120px;
    margin: 0px 12px;
}
.delete-data-text > p{
    color: #000;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0145em;
    font-size: 14px;
    line-height: 20px; 
    text-indent: -8px;
    margin-left: 8px;
}
.checkbox-agree-wrapper > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 25px;
    width: 100%;
    margin: 10px 0px;
}
.box-checkbox{
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
.text-agree-content > p{
    color: #888;
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.0096em;
    font-size: 15px;
    line-height: 22px; 
    margin: 0px 0px 0px 7px;
    word-break: keep-all;
}
.btn-user{
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    border: none;
}
.btn-user > span{
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.0056em;
    font-size: 16px;
    line-height: 24px; 
}
.btn-user-delete{
    background-color: #36f;
}
.btn-user-delete > span{
    color: #fff;
}
.btn-user-delete-cancel{
    background-color: #fff;
}
.btn-user-delete-cancel > span{
    color: #939393;
}
`;

