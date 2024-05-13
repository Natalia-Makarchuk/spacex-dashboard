import { BorderedContainer, ShadowedContainer, TitleExtraBold, TitleSemiBold } from 'components/common';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const MainContainer = styled(ShadowedContainer)`
  margin-top: 20px
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const DescriptionSection = styled.div`
  flex: 30%;

  @media (max-width: 1024px) {
    flex: 100%;
  }
`;

export const ChartSection = styled(BorderedContainer)`
  flex: 70%;
  padding: 10px 5px;

  @media (max-width: 1024px) {
    flex: 100%;
  }
`;

export const TotalLaunches = styled(TitleExtraBold)`
  font-size: 48px;
`;

export const SummarySection = styled(BorderedContainer)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;

  @media (max-width: 485px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 290px) {
    grid-template-columns: 1fr;
  }
`;

export const DataItem = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border-right: solid 1px ${colors.grey300};

  &:last-child {
    border-right: none;
  }

    @media (max-width: 485px) {
    &:nth-child(2n) {
      border-right: none;
    }

    &:nth-last-child(-n+2) {
      border-top: solid 1px ${colors.grey300};
    }
  }

    @media (max-width: 290px) {
      border-right: none;
      border-top: none;
      border-bottom: solid 1px ${colors.grey300};

      &:nth-last-child(-n+2) {
        border-top: none;
      }

      &:last-child {
        border: none;
      }
  }
`;

export const DataValue = styled(TitleSemiBold)`
  font-size: 36px;
`;
