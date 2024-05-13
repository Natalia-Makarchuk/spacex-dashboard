import React from 'react';
import styled from 'styled-components';
import { TextRegular } from '.';

const LoadingContainer = styled(TextRegular)`
  padding: 20px;
`;

export const Loading = () => (
  <LoadingContainer>Loading...</LoadingContainer>
);
