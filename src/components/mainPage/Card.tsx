import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { Task } from '../../data/data';
import { NavLink } from 'react-router-dom';

export interface PageCardProps extends Task {}

const MainCard: React.FC<PageCardProps> = ({ title, description, id }) => {
  return (
    <CardWrapper>
      <NavLink to={`/task${id}`}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </NavLink>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 0 2%;
`;

export default MainCard;
