import styled from "styled-components";

export const SectionStyled = styled.section`
  position: relative;
  scroll-margin-top: 4px;
  padding: 60px 0;
  margin-top: -170px;
  font-family: 'Pretendard';

  > div{
    max-width: 1060px;
    width: 87.72%;
    margin: 0 auto;
  }
  .box-title-wrapper{
    text-align: center;
  }
  .box-title-wrapper > div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-title-wrapper > div > h2{
    font-size: 22px;
    line-height: 1.33;
    font-weight: 700;
    color: #333;
    margin-left: 4px;
  } 
  .box-title-wrapper > div > button{
    margin-top: 3px;
    margin-left: 4px;
    line-height: normal;
  }

  .box-title-popup{
    max-width: 368px;
    top: 100px;
    position: absolute;
    padding: 20px;
    width: 87%;
    background-color: #fff;
    border: 1px solid #999;
    z-index: 1200;
    left: 50%;
    transform: translateX(-50%);
  }
  .box-title-popup > h5{
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    color: #000;
  }
  .box-title-popup > p{
    margin-top: 15px;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #333;
    word-break: keep-all;
  }
  .box-title-popup > button{
    position: absolute;
    top: 14px;
    right: 14px;
    padding: 4px;
    font-size: 18px;
  }
  .box-title-popup > button > span{
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .box-category-wrapper{
    position: relative;
  }
  .box-category-wrapper > div{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 30px 0;
    grid-gap: 8px;
    gap: 8px;
  }
  .scrollsnap-interest{
    max-width: calc(100% - 40px - 8px);
    position: relative;
    display: flex;
  }
  .scrollsnap-interest-slide{
    grid-gap: 8px;
    gap: 8px;
    display: flex;
    padding-bottom: 0.5px;
    scroll-snap-type: x mandatory;
    overscroll-behavior: contain;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .scrollsnap-interest-slide::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .btn-category-list{
    display: flex!important;
    padding: 9px 22px!important;
    font-weight: 600!important;
    font-size: 15px!important;
    line-height: 146.7%!important;
    flex-shrink: 0;
    color: #888!important;
    border-color: #ececec!important;
    outline: none;
    scroll-snap-align: start;
    height: 40px!important;
    position: relative!important;
    background-color: #fff;
    border: 1px solid #36f;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    box-sizing: border-box;
    border-radius: 25px;
    cursor: pointer;
  }
  .btn-category-list:first-of-type{
    color: #36f!important;
    border-color: #36f!important;
  }
  .btn-category-list:hover{
    color: #888;
    background-color: #ececec;
    border-color: #ececec;
  }
  .btn-category-list > span{
    width: 100%;
    font-size: inherit;
    font-weight: inherit;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    color: inherit;
  }
  .arrow-slide{
    justify-content: flex-start;
    display: flex;
    width: 80px;
    position: absolute;
    align-items: center;
    height: 100%;
    z-index: 1;
  }
  .arrow-slide-prev{
    left: 0;
    background: linear-gradient(90deg,#fff 21.82%,hsla(0,0%,100%,0));    
  }
  .arrow-slide > button{
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    border: 1px solid #ececec;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
    color: #888;
    position: relative;
  }
  .arrow-slide > button > span{
    color: #888;
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }
  .arrow-slide > button > span > svg{
    width: 18px;
    height: 18px;
  }
  .arrow-slide-next{
    background: linear-gradient(270deg,#fff 21.82%,hsla(0,0%,100%,0));
    justify-content: flex-end;
    right: 0;
  }

  .btn-category-more{
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ececec;
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    color: #939393;
    background-color: #fff;
    outline: none;
  }
  .btn-category-more > svg, .btn-category-moreActive > svg{
    width: 16px;
    height: 3px;
  }
  .btn-category-moreActive{
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ececec;
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    color: #fff;
    background-color: #36f;
    outline: none;
    z-index: 1500;
  }

  .modal-category-more{
    position: absolute!important;
    z-index: 1400;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-backdrop{
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: transparent;
  }
  .modal-body{
    padding: 25px;
    position: absolute;
    height: auto;
    top: 50px;
    max-width: 1060px;
    border: 1px solid #ececec;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 4px 20px rgb(0 0 0 / 15%);
    border-radius: 4px;
  }
  .modal-body-content{
    display: flex;
    flex-wrap: wrap;
    grid-gap: 8px;
    gap: 8px;
    padding: 0;
    overflow-y: auto;
  }
  .modal-body-divider{
    margin: 25px 0 20px;
    height: 1px;
    border: none;
    background-color: #ececec;
  }
  .modal-body-tag{
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    gap: 10px;
  }
  .modal-body-tag > p{
    font-weight: 400;
    font-size: 15px;
    line-height: 146.7%;
    letter-spacing: .0096em;
    color: #666;
  }
  .modal-body-tag > button{
    font-weight: 600;
    font-size: 15px;
    line-height: 146.7%;
    letter-spacing: .0096em;
    text-decoration-line: underline;
    color: #36f;
  } 


  .ul-section-list{
    width: 100%!important;
    margin-bottom: 50px;
    max-width: 1060px;   
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    grid-gap: 32px 20px;
    gap: 32px 20px;
    margin: 0 auto;
  }
  .card-section-list{
    position: relative;
    transition: all .1s ease-out;
    will-change: transform;
    width: calc(25% - 15px);
    cursor: pointer;
  }
  .card-section-list:hover{
    transform: translateY(-4px);
  }
  .card-thumbnail-wrapper{
    position: relative;
    height: auto;
    padding-left: 0;
    width: 100%;
    padding-bottom: 70%;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.06);
    overflow: hidden;
    transition: opacity,color .1s ease-out;
  }
  .card-thumbnail-outlink{
    opacity: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    background-color: #fff;
    padding: 4px 8px;
    color: #333;
    left: 12px;
    top: 12.5px;
    border-radius: 9999px;
    grid-gap: 4px;
    gap: 4px;
    transition: opacity .1s ease-out;
  }
  .card-thumbnail-outlink > span:first-of-type{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: inherit;
    font-size: 12px;
    transition: opacity,color .1s ease-out;
  }
  .card-thumbnail-outlink > span:first-of-type > svg{
    width: 1em;
    height: 1em;
    transition: opacity,color .1s ease-out;
  }
  .card-thumbnail-img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity,color .1s ease-out;
  }
  .card-thumbnail-img > img{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-position: center;
    z-index: 2;
  }
  .card-info-wrapper{
    flex-direction: column;
    grid-gap: 4px;
    gap: 4px;
    margin-top: 12px;
    display: flex;
    padding-right: 4px!important;
  }
  .card-info-title{
    font-size: 18px;
    line-height: 144.4%;
    letter-spacing: -.0002em;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 600;
    color: #333;
    margin: 0;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
  .card-info-description{
    font-size: 13px;
    line-height: 138.5%;
    color: #939393;
    margin: 0;
    font-weight: 400;
    letter-spacing: .025em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }
  .card-profile-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: 6px;
    gap: 6px;
    padding: 1px 0;
    margin-top: 12px;
    padding-right: 4px!important;
  }
  .card-profile-wrapper > img{
    border-radius: 50%;
    border: 1px solid #ececec;
    width: 24px;
    height: 24px;
  }
  .card-profile-wrapper > span{
    font-size: 12px;
    line-height: 133.3%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    font-weight: 400;
    letter-spacing: .031em;
    color: #888;
  }
`;