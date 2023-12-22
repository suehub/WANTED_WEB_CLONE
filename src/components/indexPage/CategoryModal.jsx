import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import ReactModal from 'react-modal';

export default function CategoryModal() {

    const [categoryDatas, setCategoryDatas] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        getCategoryDatas();
        window.addEventListener('click', handleCloseModal);
        return () => {
            window.removeEventListener('click', handleCloseModal);
        };
    }, []);
      
    const handleCloseModal = e => {
        if(isModal && (!modalRef.current || !modalRef.current.contains(e.target))) setIsModal(false);
    }

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

    return (
        <ModalStyled isOpen={true} onRequestClose={() => setIsModal(false)}>
            <div  className='modal-category-more'>
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
        </ModalStyled>
    )
}

const ModalStyled = styled(ReactModal)`
    font-family: 'Pretendard';

    .modal-category-more{
        position: absolute!important;
        z-index: 1400;
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
        display: -ms-flexbox;
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
`;
