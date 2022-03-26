import React from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';

const MyDivider = () => {
  return (
    <MyDividerWrapper>
      <Divider />
    </MyDividerWrapper>
  );
};

const MyDividerWrapper = styled.div`
  margin: 10px 15px !important;
`;
export default MyDivider;
