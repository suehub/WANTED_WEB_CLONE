import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  background: #fff;
  min-height: calc(100vh - 50px);
  font-family: 'Pretendard';

  .nav-category-wrapper{
    background: #fff;
    padding-top: 40px;
  }
  .nav-category-body{
    margin: 0 auto;
    width: 87.72%;
    position: relative;
    display: flex;
    max-width: 1060px;
    align-items: center;
  }
  .btn-job-group{
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
  .span-group-title{
    padding-top: 3px;
    margin-right: 15.5px;
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
    color: #333;
  }
  .span-group-title > option{
    font-size: 15px;
    font-weight: 500;
  }
  .btn-group-more{
    position: relative;
    display: inline-block;
    border: 1px solid #e1e2e3;
    border-radius: 9999px;
    background-color: #fff;
    width: 26px;
    height: 26px;
    transition: .3s;
    flex-shrink: 0;
  }
  .btn-group-more > svg{
    margin-top: 7px;
  }
  .btn-more-active{
    border-color: #767676;
    transform: rotate(180deg);
  }

  .nav-subcategory-group{
    display: flex;
    white-space: nowrap;
    overflow: hidden;
  }
  .nav-subcategory-group:before{
    content: "|";
    font-size: 28px;
    line-height: 29px;
    padding: 3px 24px 0;
    color: #ececec;
  }
  .nav-subcategory > button{
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .nav-subcategory-title{
    padding-top: 3px;
    margin-right: 15.5px;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .nav-subcategory-disabled{
    padding-top: 3px;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    color: #aaa;
  }
 


  .joblist-content-wrapper{
    margin: 0 auto;
    padding: 20px 0 80px;
    width: 87.72%;  
    position: relative;
    max-width: 1060px;
  }

  .hr-content-divider{
    height: 1px;
    margin: 0;
    border: none;
    width: 100vw;
    margin-bottom: 38px;
    margin-left: calc(-50vw + 50%);
    background-color: #e1e2e3;
  }

  .section-joblist-bookmark{
    margin-bottom: 12px;
  }
  .section-joblist-bookmark > button{
    display: flex;
    align-items: center;
    line-height: 24px;
    color: #36f;
  }
  .section-joblist-bookmark > button > span{
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 24px;
    letter-spacing: normal;
    margin-left: 5px;
  }
  .section-joblist-bookmark > button > svg:last-of-type{
    width: 10px;
    margin: 0 0 0 2px;
    height: 16px;
  }

  .container-list-wrapper > ul{
    margin: -10px;
    padding: 0;
  }
  .container-list-wrapper > ul > li{
    width: 23%;
    padding: 10px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
  }

  .btn-ribbon-banner{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #258bf7;
    transition: .5s;
    box-shadow: 0 -2px 5px 0 rgb(0 0 0 / 5%);
    z-index: 2;
    height: 70px;
  }
  .ribbon-banner-wrapper{
    margin: 0 auto;
    width: 87.72%;
    position: relative;
    max-width: 1060px;
  }
  .ribbon-banner-wrapper > div:first-child{
    padding: 10px 0 6px 6px;
    float: left;
  }
  .text-banner-inner{
    text-align: left;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    display: inline-block;
    vertical-align: middle;
  }
  .ribbon-banner-wrapper > div:last-child{
    float: right;
    width: 118px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background-color: #fff;
    color: #258bf7;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
  }


  .nav-job-category{
    max-width: 190px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 40px;
    overflow: hidden;
    height: 70vh;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
    border-radius: 5px;
    z-index: 99;
    padding: 15px 0;
  }
  .nav-job-category:hover{
    overflow-y: scroll;
  }
  .nav-job-category::-webkit-scrollbar{
    background-color: #fff;
    width: 4px;
  }
  .nav-job-category::-webkit-scrollbar-thumb{
    background-color: #cdcdcd;
    border-radius: 10px;
  }
  .nav-job-category::-webkit-scrollbar-track{
    background-color: #fff;
  }
  .nav-job-category > a{
    color: #36f;
    font-weight: 500;
    font-size: 16px;
    padding: 10px 0 10px 25px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer
  }
  .nav-job-category > ul > li > a{
    display: block;
    align-items: center;
    font-size: 16px;
    padding: 13px 25px 9px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;
  }
  .nav-job-category a:hover{
    background-color: #f8f8f8;
  }
`;