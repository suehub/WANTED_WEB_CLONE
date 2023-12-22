import styled from "styled-components";

export const SvgStyle = styled.svg`
    overflow: hidden;
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
`;

export const DividerContainer = styled.div`
    max-width: 1060px;
    width: 90%;
    margin: 0 auto;
    > hr{
        height: 1px;
        margin: 0;
        border: none;
        background-color: #ececec;
    }
`;