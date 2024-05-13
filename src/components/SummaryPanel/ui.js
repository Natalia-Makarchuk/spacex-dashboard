import styled from 'styled-components';

export const SummaryContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 5px;
  overflow-x: auto;
  flex-wrap: nowrap;
`;

export const Item = styled.article`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(107 114 128 / 50%);
  min-width: 174px;
  margin-right: 1em;
  &:last-child {
    margin-right: 0;
  }
`;