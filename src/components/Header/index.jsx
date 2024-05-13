import React from "react";
import { TitleExtraBold } from "components/common";
import { Narrative } from "./ui";

export const Header = () => {
  return (
    <>
      <TitleExtraBold>Dashboard</TitleExtraBold>
      <Narrative>Welcome back, here's what's happening with SpaceX today. Below is an overview of the fleets, all launches past and upcoming.</Narrative>
    </>
  );
}