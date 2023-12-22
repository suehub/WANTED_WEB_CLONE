import React from 'react';
import styled from 'styled-components';

export default function ShorcutNav() {
  return (
    <Container>
        <ul>
            <li>
                <button type='button'>
                    <span class="material-symbols-outlined">person</span>
                    내 프로필
                </button>
            </li>
            <li>
                <a href='https://www.wanted.co.kr/matchup/intro/'>
                    <span class="material-symbols-outlined">corporate_fare</span>
                    매치업
                </a>
            </li>
        </ul>
    </Container>
  )
}

const Container = styled.nav`
    margin: 0 auto;
    padding: 60px 0 85px;
    width: 87.72%;
    max-width: 1060px;
    font-family: 'Pretendard';

    > ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        color: #333;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        word-break: break-all;
    }
    > ul > li{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0;
        height: 80px;
    }
    > ul > li:first-child{
        background-color: #f2f5ff;
        border-top-left-radius: 38.5px;
        border-bottom-left-radius: 38.5px;
        border-left: none;
           
    }
    > ul > li > button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 20px;
    }
    > ul > li:last-child{
        border-top-right-radius: 38.5px;
        border-bottom-right-radius: 38.5px;
        background-color: #f2fbf5;
        border-left: 1px solid #fff;
    }
    > ul > li > a{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 20px;
    }
    .material-symbols-outlined{
        margin-right: 10px;
        margin-top: 5px;
        width: 28px;
        height: 28px;
    }
`;