import { ShadowedContainer } from 'components/common';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const LaunchesMain = styled(ShadowedContainer)`
`;

export const LaunchList = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  height: 60vh;
`;

export const LaunchItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LauchIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  background-color: ${colors.grey300};
  margin-right: 15px;
`;
