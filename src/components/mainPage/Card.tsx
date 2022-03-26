import React from 'react';
import styled from 'styled-components';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface PageСardProps {
  title?: string;
  description?: string;
}

const MainCard: React.FC<PageСardProps> = ({ title, description }) => {
  return (
    <CardWrapper>
      <NavLink to={'/'}>
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

const CardWrapper = styled.div``;

export default MainCard;
