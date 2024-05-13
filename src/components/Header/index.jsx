import React from "react";
import { TextRegular, TitleBig } from "components/common";
import styled from "styled-components";

const Narrative = styled(TextRegular)`
  font-size: 20px;
`;

export const Header = () => {
  return(
    <>
      <TitleBig>Dashboard</TitleBig>
      <Narrative>Welcome back, here's what's happening with SpaceX today. Below is an overview of the fleets, all launches past and upcoming.</Narrative>
    </>
  );
}