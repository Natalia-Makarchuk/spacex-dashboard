import styled from 'styled-components';
import { colors } from 'styles/colors';

export const TitleExtraBold = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 36px;
  margin: 0;
  color: ${colors.grey900}
`;

export const TitleSemiBold = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  color: ${colors.grey900}
`;

export const TitleMedium = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  color: ${colors.grey900}
`;

export const TextRegular = styled.p`
  font-size: 14px;
  color: ${colors.grey500}
`;

export const TextBold = styled.p`
  font-size: 14px;
  color: ${colors.grey900}
`;

export const ShadowedContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgb(107 114 128 / 30%);
`;

export const BorderedContainer = styled.div`
  border-radius: 10px;
  border: solid 1px ${colors.grey300}
`;
