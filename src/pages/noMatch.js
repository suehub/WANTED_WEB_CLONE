import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NoMatch() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h1>유효하지 않은 경로입니다.</h1>
        <button onClick={() => navigate('/')} type='button'>
          <span>홈 화면으로 돌아가기</span>
        </button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin: 50px auto 0 auto;
  align-items: center;
  font-family: 'Pretendard';
  > div{
    width: 100%;
    background-color: #fff;
    margin-top: 100px;
    text-align: center;
    padding: 50px 20px 20px 20px;
    height: 50%;
  }
  > div > button{
    width: auto;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 0 50px;
    cursor: pointer;
    background-color: #36f;
    border: none;
    margin-top: 30px;
  }
  > div > button > span{
    color: #fff;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.0056em;
    font-size: 16px;
  }
`;