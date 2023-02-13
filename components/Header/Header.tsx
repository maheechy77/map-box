import { AppBar } from "@mui/material";
import React from "react";
import {
  LogoText,
  ParentFlexContainer,
  RightMenuContainer,
  RightMenuItemOne,
  RightMenuItemTwo,
  SearchFieldStyle,
} from "./Header.style";

const Header: React.FC = () => {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <ParentFlexContainer>
        <LogoText variant="h6">Logo</LogoText>
        <SearchFieldStyle>Global Search</SearchFieldStyle>
        <RightMenuContainer>
          <RightMenuItemOne variant="h6">Notifications</RightMenuItemOne>
          <RightMenuItemTwo variant="h6">Profile</RightMenuItemTwo>
        </RightMenuContainer>
      </ParentFlexContainer>
    </AppBar>
  );
};
export default Header;
