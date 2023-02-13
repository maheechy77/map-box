import Box from "@mui/material/Box/Box";
import React from "react";
import BottomTabs from "./BottomTabs";
import { FieldInfoContainer } from "./FieldInformation.style";
import MiddleTabs from "./MiddleTabs";
import TopTabs from "./TopTabs";

const FieldInformation: React.FC = () => {
  return (
    <FieldInfoContainer>
      <TopTabs />
      <MiddleTabs />
      <BottomTabs />
    </FieldInfoContainer>
  );
};
export default FieldInformation;
