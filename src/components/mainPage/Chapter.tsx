import React from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@mui/material';
import { ChapterI } from '../../data/data';
import Card from './Card';

interface ChapterProps extends ChapterI {}

const Chapter = ({ title, tasks }: ChapterProps) => {
  return (
    <ChapterWrapper>
      <TitleWrapper title={title}>
        <Typography variant="h2" display="flex" justifyContent="center">
          {title}
        </Typography>
      </TitleWrapper>
      <StyledDivider />
      <TasksWrapper>
        {tasks.map((task) => {
          return <Card title={task.title} description={task.description} key={task.id} id={task.id} />;
        })}
      </TasksWrapper>
    </ChapterWrapper>
  );
};

const ChapterWrapper = styled.div``;
const StyledDivider = styled(Divider)`
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const TasksWrapper = styled.div`
  display: flex;
`;
export default Chapter;
