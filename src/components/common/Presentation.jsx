import React from 'react';
import styled from 'styled-components';

export default function Presentation(props) {
  return (
    <NavStyled>
        <h2 className='text-nav-title'>
            <p>{props.title}</p>
            <button type='button'>{props.title}</button>
        </h2>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    position: relative;
    line-height: normal;
    font-family: 'Pretendard';

    h2 > p{
        font-size: 20px;
        font-weight: 700;
        color: #333;
        padding: 50px 0 20px;
    }
    h2 > button{
        width: 100%;
        display: none;
        position: relative;
        border-top: 1px solid rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(0,0,0,.1);
        cursor: pointer;
    }
`;