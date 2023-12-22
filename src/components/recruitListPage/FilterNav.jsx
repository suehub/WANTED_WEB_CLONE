import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { SvgStyle } from '../common/styled';
import { useRecoilState } from 'recoil';
import { sortFilter } from '../../recoil/sortFilter';
import { StyledContainer } from '../styled/filterNavStyled'; 
import { SliderStyled } from '../styled/filterNavStyled';
import { PrevButton } from '../styled/filterNavStyled';
import { PrevButtonScroll } from '../styled/filterNavStyled';
import { NextButton } from '../styled/filterNavStyled';
import { NextButtonScroll } from '../styled/filterNavStyled';



export default function FilterNav() {

    const [sortValue, setSortValue] = useRecoilState(sortFilter);

    const [tagDatas, setTagDatas] = useState([]);
    const [isSortToggle, setIsSortToggle] = useState(false);

    const [scrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(false);

    const customSlider = useRef();

    useEffect(() => {
        getTagDatas();
     }, []);


    useEffect(() => {
        const scrollListener = () => {
        window.addEventListener('scroll', scrollFixed);
        };
        scrollListener();
        return () => {
        window.removeEventListener('scroll', scrollFixed);
        };
    }, [scrollY, scrollActive]);

  
    // 채용 태그 불러오기 API
    const getTagDatas = async (e) => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/recruit/job-tags`)
      .then((res) => {
          if(res.data.code === 1000) {   // 요청 성공
              console.log(`recruit/job-tags ${res.data.message}`);
              setTagDatas(res.data.result);
          } else if(res.data.code !== 1000) {
              console.log(`recruit/job-tags ${res.data.message}`);
          }
          console.log(res.data.result);

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

    const scrollFixed = () => {
        if (scrollY > 255) {    // header height
        setScrollY(window.pageYOffset);
        setScrollActive(true);
        } else {
        setScrollY(window.pageYOffset);
        setScrollActive(false);
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        initialSlide: 0
      };
    
      // slider button 
      const next = () => {
          customSlider.current.slickNext();
      };
      const previous = () => {
          customSlider.current.slickPrev();
      };
  

    return (
        <StyledContainer >
            <div className={scrollActive ? 'nav-filter-wrapper-fixed' : 'nav-filter-wrapper'}>
                <div className='nav-filter-inner'>
                    <div className='select-group-wrapper'>
                      <button className='btn-filter' type='button'>
                          <span className='btn-title-filter'>
                          지역
                          <span className='span-count-filtered'>1</span>
                          </span>
                          <span className='btn-display-filter'>한국</span>
                      </button>

                      <div className='btn-filter-year'>
                          <button className='btn-filter' type='button'>
                          <span className='btn-title-filter'>경력</span>
                          <span className='btn-display-filter'>전체</span>
                          <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                          </button>
                      </div>

                      <div className='btn-filter-skill'>
                          <button className='btn-filter' type='button'>
                          <span className='btn-title-filter'>기술스택</span>
                          <span className='btn-display-filter'></span>
                          <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                          </button>
                      </div>

                      <div className='btn-filter-sort'>
                          <div>
                            <div className='selector-custom-wrapper'>
                                <button onClick={() => setIsSortToggle(!isSortToggle)} type='button'>
                                  <span>{sortValue.sortValue}</span>
                                  {isSortToggle 
                                  ? <svg className='svg-sort-toggle svg-sort-toggle-active' width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>
                                  :  <svg className='svg-sort-toggle' width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z" fill="#333333"></path></svg>}
                                </button>
                                {isSortToggle &&
                                <ul>
                                  <li onClick={() => {setSortValue({sortValue:'응답률순'}); setIsSortToggle(false);}}>
                                      <button type='button'>응답률순</button>
                                  </li>
                                  <li onClick={() => {setSortValue({sortValue:'최신순'}); setIsSortToggle(false);}}>
                                      <button type='button'>최신순</button>
                                  </li>
                                  <li onClick={() => {setSortValue({sortValue:'보상금순'}); setIsSortToggle(false);}}>
                                      <button type='button'>보상금순</button>
                                  </li>
                                  <li onClick={() => {setSortValue({sortValue:'인기순'}); setIsSortToggle(false);}}>
                                      <button type='button'>인기순</button>
                                  </li>
                                </ul>}
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                
                <hr className='hr-filter-divider' />

                <section className='tag-filter-wrapper'>
                    {scrollActive 
                    ?
                    <PrevButtonScroll onClick={previous} type="button">
                        <span>
                            <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>                      
                        </span>
                    </PrevButtonScroll>
                    :
                    <PrevButton onClick={previous} type="button">
                        <span>
                            <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>                      
                        </span>
                    </PrevButton>}
                    <SliderStyled {...settings} ref={customSlider}>
                        {tagDatas.map(e => {
                        return(
                            <button key={e.jobTagIdx} className='btn-tag-slider' type='button'>
                                {e.jobTag}
                                <img src={e.jobTagImg} alt={e.jobTag} />
                            </button>
                        )
                        })}       
                    </SliderStyled>
                    {scrollActive 
                    ?
                    <NextButtonScroll onClick={next} type="button">
                      <span>
                          <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                      </span>
                    </NextButtonScroll>
                    :
                    <NextButton onClick={next} type="button">
                      <span>
                          <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>
                      </span>
                    </NextButton>}
                </section>
            </div>
        </StyledContainer>
    )
}