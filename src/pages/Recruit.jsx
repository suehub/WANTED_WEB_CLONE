import React from 'react';
import styled from 'styled-components';
import CareerConnectBanner from '../components/indexPage/CareerConnectBanner';
import ShorcutNav from '../components/recruitPage/ShorcutNav';
import FeatureJobList from '../components/recruitPage/FeatureJobList';
import JobsBanner from '../components/recruitPage/JobsBanner';
import LineBanner from '../components/indexPage/LineBanner';
import MatchedJobList from '../components/recruitPage/MatchedJobList';
import { DividerContainer } from '../components/common/styled';

export default function RecruitPage() {
  return (
    <MainStyled>
        <JobsBanner />
        <LineBanner />
        <MatchedJobList />
        <CareerConnectBanner />
        <ShorcutNav />
        <DividerContainer><hr /></DividerContainer>
        <FeatureJobList />
    </MainStyled>
  )
}

const MainStyled = styled.main`
    display: block;
    background-color: #fff;
    margin-top: 50px;
    padding-top: 25px;
    width: 100%;
`;

