import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import JobListCard from '../../components/common/JobListCard';
import Presentation from '../../components/common/Presentation';
import { logState } from '../../recoil/logState';

export default function Bookmarks() {

    const userRecoilData = useRecoilValue(logState);
    const [bookmarkLists, setBookmarkLists] = useState([]);

    const jwt = userRecoilData.jwt;
    
    useEffect(() => {
        getBookmarkDatas();
    }, []);

    // get bookmark data
    const getBookmarkDatas = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/bookmarks`,{
            headers: {
                'X-ACCESS-TOKEN': jwt
            }
        })
        .then(res => {
            if(res.data.code === 1000) {   // 요청 성공
            console.log(`/recruit/bookmarks ${res.data.message}`);
            setBookmarkLists(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/bookmarks ${res.data.message}`);
        }
        console.log(res.data.result);
        })
        .catch (error => {
        if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
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
            <Presentation title="북마크" />
            <div>
                <ul className='ul-bookmark-list'>
                    {bookmarkLists.map(e => {
                        return(
                            <li key={e.jobIdx}>
                                <JobListCard state={e}/>
                            </li>
                        )
                    })}
                </ul>
                {(bookmarkLists.length === 0) &&
                <div className='bookmark-empty'>
                    <div>아직 북마크한 포지션이 없습니다.</div>
                </div>
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
padding-bottom: 100px;
margin: 50px auto 0 auto;
width: 87.72%;
position: relative;
max-width: 1060px;
font-family: 'Pretendard';
.ul-bookmark-list{
    margin: -10px;
    padding: 0;
}
.ul-bookmark-list > li{
    width: 23%;
    padding: 10px;
    list-style: none;
    display: inline-block;
    vertical-align: top;
}
.bookmark-empty{
    padding: 60px 0;
    text-align: center;
}
.bookmark-empty > div{
    margin: 240px 0;
    color: #d1d1d1;
    font-size: 24px;
}
`;
