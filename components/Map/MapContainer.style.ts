import { grey } from "@mui/material/colors";
import { Box, BoxProps } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const bgLightGrey = grey[400];
const textDarkGrey = grey[800];

export const MapMenuContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "52px",
  backgroundColor: bgLightGrey,
  padding: "6px 0px",
  
}));

export const MapMenuItemsText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textDarkGrey,
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
  })
);

export const MapSubMenuItems = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute",
  left: "0px",
  top: "120%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "0px 6px",
  width: "100%",
  textAlign: "left",
  padding: "12px 20px 20px",
}));

export const MapSubMenuItemsText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textDarkGrey,
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
  })
);
