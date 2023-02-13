import React from "react";
import {
  TopTabContainer,
  TopTabLeftContainer,
  TopTabRightContainer,
  FieldInfoText,
  RequestServiceButton,
} from "./FieldInformation.style";
import RemoveIcon from "@mui/icons-material/Remove";

const TopTab: React.FC = () => {
  return (
    <TopTabContainer>
      <TopTabLeftContainer>
        <RemoveIcon sx={{ color: "white" }} />
        <FieldInfoText>Selected Field Information</FieldInfoText>
      </TopTabLeftContainer>

      <TopTabRightContainer>
        <RequestServiceButton>Request Service</RequestServiceButton>
      </TopTabRightContainer>
    </TopTabContainer>
  );
};
export default TopTab;
