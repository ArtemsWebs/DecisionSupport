import React from 'react';
import { styled } from '@mui/material';
import { chapters } from '../data/data';
import Chapter from '../components/mainPage/Chapter';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <MainWrapper>
      {chapters.map((chapter) => {
        return <Chapter key={chapter.id} title={chapter.title} tasks={chapter.tasks} />;
      })}
    </MainWrapper>
  );
};
const MainWrapper = styled('div')({});

export default MainPage;
