import React from 'react';
import { styled } from '@mui/material';

interface MainPage {}

const Door: React.FC<MainPage> = ({ children }) => {
  return (
    <AppWrapper>
      <Left />
      <Centre />
      <Right />
      {children}
    </AppWrapper>
  );
};

const Left = styled('div')({
  width: '50%',
  height: '100%',
  backgroundColor: 'darkblue',
});
const Right = styled('div')({
  width: '50%',
  height: '100%',
  background: 'gold',
});
const AppWrapper = styled('div')({
  display: 'flex',
  width: 'inherit',
  height: 'inherit',
});
const Centre = styled('div')({
  width: '50px',
  height: '50px',
});
export default Door;
