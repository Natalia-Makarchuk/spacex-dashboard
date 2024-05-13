import React from 'react';
import styled from 'styled-components';
import { TextRegular } from '.';

const ErrorContainer = styled(TextRegular)`
  padding: 20px;
`;

export const Error = ({ dataName }) => (
  <ErrorContainer>Fetching {dataName ? dataName : ''} data error</ErrorContainer>
);
