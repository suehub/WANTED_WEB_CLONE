import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { SvgStyle } from '../common/styled';
import { SectionStyled } from '../styled/careerContentListStyled';

export default function CarrerContentList() {

  const [categoryDatas, setCategoryDatas] = useState([]);
  const [articlesDatas, setArticlesDatas] = useState([]);

  const [isPop, setIsPop] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const customSlider = useRef();

  useEffect(() => {
    getCategoryDatas();
    getArticleDatas();
  }, []);

  // get category data
  const getCategoryDatas = async () => {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/home/category`)
      .then(res => {if(res.data.code === 1000) {   // 요청 성공
          console.log(`/home/category ${res.data.message}`);
          setCategoryDatas(res.data.result);
        } else {
            console.log(`/home/category ${res.data.message}`);
        }}
      )
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

  // get all article data
  const getArticleDatas = async () => {
      await axios.get(`${process.env.REACT_APP_BASE_URL}/home/all`)
      .then(res => {if(res.data.code === 1000) {   // 요청 성공
          console.log(`/home/all ${res.data.message}`);
          setArticlesDatas(res.data.result);
        } else if(res.data.code !== 1000) {
            console.log(`/home/all ${res.data.message}`);
        }}
      )
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

  // slider arrow 
  const next = () => {
    customSlider.current.slickNext();
  };
  const previous = () => {
      customSlider.current.slickPrev();
  };

  // popup, modal
  const onClickPopup = () => {
      setIsPop(!isPop);
  }
  
  //  modal close
  const onClickModal = () => {
    setIsModal(!isModal);
  }

  return (
    <SectionStyled>
      <div>
        <div className='box-title-wrapper'>
          <div>
            <h2>나에게 필요한 커리어 인사이트</h2>
            <button type='button' onClick={onClickPopup}>
              <svg width="24" height="24" viewBox="0 0 17 17">
                <defs><filter id=""><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix></filter></defs>
                <g fill="none" fill-rule="evenodd"><g><g><g transform="translate(-1080 -374) translate(1080 374)"><g><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745" transform="translate(1 1)"></path><path fill="#999" d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671" transform="translate(1 1) rotate(-180 7.053 10.408)"></path><path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783" transform="translate(1 1)"></path></g></g></g></g></g>
              </svg>
            </button>
          </div>
        </div>

        {isPop && 
          <div className='box-title-popup'>
            <h5>취직/이직 준비하시기도 바쁘시죠? 😎</h5>
            <p>
              커리어 인사이트, 이제 따로 찾지 말고 원티드에서 만나보세요!
              <br />
              검증된 IT업계 전문가들이 다양한 채널에서 생산하는 커리어 콘텐츠를 선별해서 관심 태그 기반으로 제공해 드립니다.
            </p>
            <button type='button' onClick={onClickPopup}>
              <span>
                <SvgStyle viewBox="0 0 24 24"><path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path></SvgStyle>
              </span>
            </button>
          </div>
        }
        

        <div className='box-category-wrapper'>
          <div>
            <div className='scrollsnap-interest'>
              <div className='scrollsnap-interest-slide'>
                {categoryDatas.map((e) => {
                  return (
                    <button key={e.interestIdx} className='btn-category-list'>
                      <span>{e.interestTopic}</span>
                      </button>
                    )
                  })}       
              </div>
              
              <div className='arrow-slide arrow-slide-prev'>
                <button onClick={previous} type='button'>
                <span>
                    <SvgStyle viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path></SvgStyle>
                </span>
                </button>
              </div>
              <div className='arrow-slide arrow-slide-next'>
                <button onClick={next} type='button'>
                  <span>
                    <SvgStyle viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></SvgStyle>                  </span>
                </button>
            </div>
          </div>

            <button onClick={onClickModal} type='button' className={isModal ? 'btn-category-moreActive' : 'btn-category-more'}>
              <svg viewBox="0 0 16 3"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z" fill="currentColor"></path></svg>
            </button>

            {isModal &&
              <div className='modal-category-more'>
                <div className='modal-backdrop'></div>
                <div className='modal-body'>
                  <div className='modal-body-content'>
                    {categoryDatas.map((e) => {
                      return (
                        <button key={e.interestIdx} className='btn-category-list'>
                        <span>{e.interestTopic}</span>
                      </button>
                      )
                    })}
                  </div>
                  <hr className='modal-body-divider' />
                  <div className='modal-body-tag'>
                    <p>요즘 내 관심사 선택하고 맞춤 콘텐츠 받기!</p>
                    <button type='button'>관심태그 설정하기</button>
                  </div>
                </div>
              </div>
            }
            
          </div>
        </div>

        <ul className='ul-section-list'>
          {articlesDatas.map(e => {
            return(
            <li key={e.homeArticleIdx} className='card-section-list'>
              <a target='_blank'>
                <div className='card-thumbnail-wrapper'>
                  <div className='card-thumbnail-img'>
                    <img src={e.articleImg} alt={e.articleTitle} />
                  </div>
                </div>
                <div className='card-info-wrapper'>
                  <p className='card-info-title'>{e.articleTitle}</p>
                  <p className='card-info-description'>{e.articleContent}</p>
                </div>
                <div className='card-profile-wrapper'>
                  <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=60&amp;q=90" alt="brunch" />
                  <span>{e.provider}</span>
                </div>
              </a>
            </li>
            )
          })}
          
        </ul>

        <div className='box-more-wrapper'></div>
      </div>
    </SectionStyled>
  )
}