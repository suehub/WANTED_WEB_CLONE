import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobListCard from '../components/common/JobListCard';
import FilterNav from '../components/recruitListPage/FilterNav';
import { useRecoilValue } from 'recoil';
import { sortFilter } from '../recoil/sortFilter';
import { Link, useNavigate } from 'react-router-dom';
import { logState } from '../recoil/logState';
import { Container } from '../components/styled/recruitListsStyled';

export default function RecruitLists() {

  const sortValue = useRecoilValue(sortFilter);
  const userRecoilData = useRecoilValue(logState);

  const [articleDatas, setArticleDatas] = useState([]);
  const [jobCatagoryDatas, setJobCategoryDatas] = useState([]);
  const [jobCategoryValue, setJobCategoryValue] = useState(1);

  const [isCateToggle, setIsCateToggle] = useState(false);
  const [jobType, setJobType] = useState('전체');  
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const jwt = userRecoilData.jwt;
  const navigate = useNavigate();

  useEffect(() => {
    getJobCategoryDatas();
    getArticleAllDatas();
  }, []);

  useEffect(() => {
    getArticleJobDatas();
  }, [jobCategoryValue]);

  useEffect(() => {
    getArticleSortDatas();
  }, [sortValue]);


  useEffect(() => {
      const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
      };
      scrollListener();
      return () => {
      window.removeEventListener('scroll', scrollFixed);
      };
  }, [scrollY, scrollActive]);

  

  const scrollFixed = () => {
    if (scrollY > 255) {    // header height
    setScrollY(window.pageYOffset);
    setScrollActive(true);
    } else {
    setScrollY(window.pageYOffset);
    setScrollActive(false);
    }
  };

  // 채용 직군 카테고리 API GET
  const getJobCategoryDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/jobCategory`);

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/jobCategory ${res.data.message}`);
          setJobCategoryDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/jobCategory ${res.data.message}`);
        }
    } catch (error) {
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
    }
  }

  // 채용 직군 카테고리에 따라 API GET
  const getArticleJobDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/category?job-type=${jobCategoryValue}`, {
          headers: {
            'X-ACCESS-TOKEN': jwt
          }
        });

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/jobCategory?job-type ${res.data.message}`);
          setArticleDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/jobCategory?job-type ${res.data.message}`);
        }
        // console.log(res.data.result);
    } catch (error) {
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
    }
  }

  // 채용 게시물 전체 리스트 API GET
  const getArticleAllDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/all`, {
          headers: {
            'X-ACCESS-TOKEN': jwt
          }
        });

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/all ${res.data.message}`);
          setArticleDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/all ${res.data.message}`);
        }

    } catch (error) {
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
    }
  }

  // 채용 게시물 인기순 분류 리스트 API GET
  const getArticleViewDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/posts/view`, {
          headers: {
            'X-ACCESS-TOKEN': jwt
          }
        });

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/posts/view ${res.data.message}`);
          setArticleDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/posts/view ${res.data.message}`);
        }

    } catch (error) {
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
    }
  }

  // 채용 게시물 최신순 분류 리스트 API GET
  const getArticleLastDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/latest-order`, {
          headers: {
            'X-ACCESS-TOKEN': jwt
          }
        });

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/latest-order ${res.data.message}`);
          setArticleDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/latest-order ${res.data.message}`);
        }

    } catch (error) {
      if (error.response) { // 요청 전송. 서버는 2xx 외의 상태 코드로 응답
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) { // 요청은 전송. 응답 수신되지 않음 
        console.log(error.request);
      } else { // 오류가 발생한 요청을 설정하는 동안 문제가 발생
        console.log('Error', error.message);
      }
      console.log(error); 
    }
  }

  // 채용 게시물 보상금순 분류 리스트 API GET
  const getArticleMoneyDatas = async () => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/posts/money`, {
          headers: {
            'X-ACCESS-TOKEN': jwt
          }
        });

        if(res.data.code === 1000) {   // 요청 성공
          console.log(`/recruit/posts/money ${res.data.message}`);
          setArticleDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/recruit/posts/money ${res.data.message}`);
        }

    } catch (error) {
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
    }
  }
  

  const getArticleSortDatas = () => {
    if(sortValue.sortValue === '응답률순') getArticleAllDatas();
    else if(sortValue.sortValue === '인기순') getArticleViewDatas();
    else if(sortValue.sortValue === '최신순') getArticleLastDatas();
    else if(sortValue.sortValue === '보상금순') getArticleMoneyDatas();
    else console.log('sortValue 값이 잘못됨'); 
  }

  return (
    <Container>
        <article className='nav-category-wrapper'>
          <div className='nav-category-body'>
            <div className='nav-category-group'>
              <button className='btn-job-group'>
                <span className='span-group-title'>{jobType}</span>
                <span onClick={() => setIsCateToggle(!isCateToggle)} className={isCateToggle ? 'btn-group-more btn-more-active' : 'btn-group-more'}>
                  <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    {isCateToggle 
                    ? <path fill="#666" fill-rule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                    : <path fill="#767676" fill-rule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                    }
                  </svg>
                </span>
              </button>
              { isCateToggle && 
              <section className='nav-job-category'>
                <Link to='/recruitlist'>전체</Link>
                <ul>
                  <li>
                  {jobCatagoryDatas.map(e => {
                    return(
                      <a onClick={() => {setJobCategoryValue(e.jobTypeIdx); setIsCateToggle(false); setJobType(e.jobType)}} key={e.jobTypeIdx} value={e.jobTypeIdx}>{e.jobType}</a>
                    )
                  })}
                  </li>
                </ul>
              </section>}
            </div>
            <div className='nav-subcategory-group'>
                <button type='button'>
                {(jobType === '전체')
                ? 
                  <span className='nav-subcategory-disabled'>직군을 선택해주세요.</span>
                  
                : <>
                  <span className='nav-subcategory-title'>{jobType} 전체</span>
                  <span className='btn-group-more'>
                    <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#767676" fill-rule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path></svg>
                  </span>
                  </>
                }
                  
                </button>
            </div>
          </div>
        </article>

        <div className='joblist-content-wrapper'>
            <div>

              <FilterNav />

              <hr className='hr-content-divider'/>
              <div className='section-joblist-bookmark'>
                <button onClick={() => navigate('/profile/bookmarks')}>
                  <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white"></path>
                      <path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="#3366FF"></path>
                  </svg>
                  <span>북마크 모아보기</span>
                  <svg width="12" height="12" viewBox="0 0 12 12"><path fill="currentColor" d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path></svg>
                </button>
              </div>

              <div className='container-list-wrapper'>
                <ul>
                    {articleDatas.map((e) => {
                        return(
                          <li>
                            <JobListCard state={e} />
                          </li>
                        )
                    })}
                </ul>
              </div>
            </div>
        </div>

        {scrollActive && 
          <button className='btn-ribbon-banner' type='button'>
            <div className='ribbon-banner-wrapper'>
                <div>
                  <span className='text-banner-inner'>이제 밤새워 채용 공고 보지 마세요.</span>
                </div>
                <div>
                  <span>더 알아보기</span>
                </div>
            </div>
        </button>
        }
        

    </Container>
  )
}
