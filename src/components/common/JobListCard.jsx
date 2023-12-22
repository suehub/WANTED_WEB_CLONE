import axios from 'axios';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { logState } from '../../recoil/logState';

export default function JobListCard(props) {

    const userRecoilData = useRecoilValue(logState);
    const jwt = userRecoilData.jwt;

    const joblist = props.state;
    const isLike = joblist.likeOrNot;
    const data = {};

    // 북마크 추가/삭제 API
    const onClickLikeOrNot = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_BASE_URL}/recruit/likes/${joblist.jobIdx}`, data, {
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then((res) => {
            if(res.data.code === 1000) {    
                console.log(`/recruit/likes/ ${res.data.message}`);
                alert(res.data.result);
                console.log(res.data.result);
                console.log(joblist.likeOrNot);
            } else if(res.data.code !== 1000) {
                console.log(`/recruit/likes/ ${res.data.code} ${res.data.message}`);
            }
          })
        .catch((error) => {
            if (error.response) { // 요청 전송
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) { // 요청은 전송. 응답 수신되지 않음 
              console.log(error.request);
            } else { // 오류가 발생한 요청을 설정하는 동안 문제가 발생
              console.log('Error', error.message);
            }
            console.log(error.config);  // 오류를 발생시키는 HTTP 코드를 정의
        })
    }
    

    return (
        <Container>
            <a href="">
                <header className='header-card' style={{"backgroundImage":`url(${joblist.jobImgUrl})`}}>
                    <button onClick={onClickLikeOrNot} className='btn-bookmark-card' type='button'>
                        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                            {(isLike === 'Y') 
                            ? <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="#3366FF"></path>
                            : <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25"></path>}
                        </svg>
                    </button>
                </header>

                <div className='body-card'>
                    <div className='body-job-position'>{joblist.title}</div>
                    <div className='body-job-company'>{joblist.company}</div>
                    <div className='body-job-loction'>
                        {joblist.region}
                        <span className='address-dot'>.</span>
                        <span>한국</span>
                    </div>
                    <div className='body-job-reward'>채용보상금 {joblist.money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
                </div>
            </a>
        </Container>
    )
}


const Container = styled.div`
    font-family: 'Pretendard';
    .header-card{
        padding-bottom: 75%;
        position: relative;
        background-size: cover;
        background-position: 50%;
        border-radius: 4px;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    }
    .btn-bookmark-card{
        background: none;
        padding: 8px 6px;
        width: 42px;
        height: 42px;
        top: 0;
        right: 0;
        flex-direction: row;
        z-index: 1;
        justify-content: flex-end;
        align-items: flex-start;
        border-radius: 3px;
        position: absolute;
        color: #fff;
        font-size: 12px;
        font-weight: 400;
        display: flex;
    }

    .body-card{
        padding: 14px 0;
    }
    .body-job-position{
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        position: relative;
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
        max-height: 2.4em;
        overflow: hidden;
        text-align: left;
        word-break: break-word;
    }
    .body-job-company{
        font-size: 14px;
        line-height: normal;
        text-align: left;
        word-break: break-word;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 10px;
    }
    .body-job-loction{
        font-weight: 400;
        color: #999;
        font-size: 14px;
        line-height: normal;
        text-align: left;
        word-break: break-word;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 10px;
    }
    .address-dot{
        margin: 0 3px;
        top: -4px;
        position: relative;
    }
    .body-job-reward{
        margin-top: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        word-break: break-word;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;