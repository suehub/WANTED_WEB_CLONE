import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { logState } from '../../recoil/logState';
import JobListCard from '../common/JobListCard';

export default function FeatureJobList() {

    const userRecoilData = useRecoilValue(logState);
    const jwt = userRecoilData.jwt;

    const [jobLists, setJobLists] = useState([]);
    
    const filterJobLists = jobLists.filter(job => job.jobIdx < 5);  // 4개의 jobList만

    useEffect(() => {
        getJobListDatas();
    }, []);
    

    // 채용 인기순 분류 리스트 API GET
    const getJobListDatas = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/posts/view`, {
                headers: {
                    'X-ACCESS-TOKEN': jwt
                }
            });
            if(res.data.code === 1000) {   // 요청 성공
                console.log(`recruit/posts/view ${res.data.message}`);
                setJobLists(res.data.result);
              } else if(res.data.code !== 1000) {
                  console.log(`recruit/posts/view ${res.data.message}`);
              }
              // console.log(res.data.result);
        } catch (error) {
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
        }
        
    }
    

    return (
        <Container>
            <header className='header-title-wrapper'>
                <h2>요즘 뜨는 포지션</h2>
            </header>
            <div>
                <ul className='ul-list-wrapper'>
                    {filterJobLists.map((e) => {
                        return(
                            <li>
                                <JobListCard state={e} />
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.article`
    margin: -30px auto 0 auto;
    padding: 70px 0 50px;
    width: 87.72%;
    position: relative;
    max-width: 1060px;
    .header-title-wrapper{
        position: relative;
        margin-bottom: 30px;
    }
    .header-title-wrapper > h2{
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.05;
        color: #111;
    } 
    .ul-list-wrapper{
        margin: -10px;
        padding: 0;
    }
    .ul-list-wrapper > li{
        width: 23%;
        padding: 10px;
        list-style: none;
        display: inline-block;
        vertical-align: top;
    }
`;