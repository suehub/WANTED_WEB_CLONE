import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import IndexPage from '../pages';
import Log from '../pages/sign/Log';
import NoMatch from '../pages/noMatch';
import Bookmarks from '../pages/profile/Bookmarks';
import RecruitPage from '../pages/Recruit';
import RecruitLists from '../pages/RecruitLists';
import SignIn from '../pages/sign/SignIn';
import SignUp from '../pages/sign/SignUp';
import Profile from '../pages/profile/Profile';
import MyInfo from '../pages/profile/MyInfo';
import ScrollToTop from '../components/common/ScrollToTop';

export default function RootRoute() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            {/* 기본 페이지 */}
            <Route path='/' element={
              <>
                <Header />
                <IndexPage />
                <Footer />
              </>} />

            {/* 추가되는 페이지 */}
            <Route path='/log' element={<Log />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/recruit' element={
              <>
                <Header />
                <RecruitPage />
                <Footer />
              </>} />
            <Route path='/recruitlist' element={
              <>
                <Header />
                <RecruitLists />
                <Footer />
              </>
            } />
            <Route path='/profile' element={
              <>
                <Header />
                <Profile />
              </>
            } />
            <Route path='/profile/myinfo' element={<MyInfo />} />
            <Route path='/profile/bookmarks' element={
              <>
                <Header />
                <Bookmarks />
              </>
            } />

            {/* 경로가 유효하지 않을 때 */}
            <Route path='*' element={
              <>
                <Header />
                <NoMatch />
                <Footer />
              </>} />
        </Routes>
    </BrowserRouter>
  )
}