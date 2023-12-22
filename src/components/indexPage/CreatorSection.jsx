import React from 'react';
import styled from 'styled-components';
import { SvgStyle } from '../common/styled';

export default function CreatorSection() {
  return (
    <SectionStyled>
       <div>
            <div className='container-creator-banner'>
                <p>즐겨보는 <span>크리에이터의</span> 글도 추천하고 싶다면?</p>
                <a href="https://forms.gle/uurkbpmkA1FapxGJ6">
                    <span>
                        크리에이터 추천하기
                        <span>
                            <span>
                                <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                            </span>
                        </span>
                    </span>
                </a>
            </div>
            <img className='img-creator-section' src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=224&amp;q=90" alt="크리에이터 추천하기" loading="lazy" />
            <button className='btn-creator-section'>
                <span>
                    <SvgStyle viewBox="0 0 24 24"><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></SvgStyle>
                </span>
            </button>
       </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
    max-width: 1060px;
    width: 90%;
    margin: 0 auto; 
    padding-bottom: 60px;
    font-family: 'Pretendard';

    > div{
        background: #fff;
        border: 1px solid #ececec;
        box-shadow: 4px 4px 15px rgb(0 0 0 / 5%);
        border-radius: 5px;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        grid-gap: 27px;
        gap: 27px;
        position: relative;
    }
    .container-creator-banner{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .container-creator-banner > p{
        word-break: keep-all;
        font-weight: 600;
        font-size: 20px;
        line-height: 141.2%;
        color: #333;
    }
    .container-creator-banner > a{
        position: relative;
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        min-width: 64px;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: .0056em;
        padding: 4px 0;
        width: fit-content;
        justify-content: flex-start;
        height: 40px;
        color: #36f;
        cursor: pointer;
    }
    .container-creator-banner > a > span{
        width: 100%;
        font-size: inherit;
        font-weight: inherit;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        color: inherit;
    }
    .container-creator-banner > a > span > span{
        margin-top: -2px;
        margin-right: -1px;
        margin-left: 2px;
    }
    .container-creator-banner > a > span > span > span{
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }

    .img-creator-section{
        width: 112px;
    }
    .btn-creator-section{
        position: absolute;
        right: 13px;
        top: 13px;
        font-size: 20.5px;
        color: #ccc;
        cursor: pointer;
    }
    .btn-creator-section > span{    
        width: 100%;
        display: flex;
        align-items: inherit;
        justify-content: inherit;
    }
`;