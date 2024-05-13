import { ShadowedContainer } from 'components/common';
import styled from 'styled-components';

export const SummaryContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 5px;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

export const Item = styled(ShadowedContainer)`
  min-width: 174px;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;
