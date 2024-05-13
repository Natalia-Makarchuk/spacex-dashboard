import { createGlobalStyle } from "styled-components";

import InterRegularWoff2 from "./Inter-Regular.woff2";
import InterRegularWoff from "./Inter-Regular.woff";
import InterMediumWoff2 from "./Inter-Medium.woff2";
import InterMediumWoff from "./Inter-Medium.woff";
import InterSemiBoldWoff2 from "./Inter-SemiBold.woff2";
import InterSemiBoldWoff from "./Inter-SemiBold.woff";
import InterExtraBoldWoff2 from "./Inter-ExtraBold.woff2";
import InterExtraBoldWoff from "./Inter-ExtraBold.woff";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularWoff2}) format('woff2'),
         url(${InterRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterMediumWoff2}) format('woff2'),
         url(${InterMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterSemiBoldWoff2}) format('woff2'),
         url(${InterSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraBoldWoff2}) format('woff2'),
         url(${InterExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
`;

export default GlobalFont;
