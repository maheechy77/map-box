import { grey } from "@mui/material/colors";
import { Box, BoxProps } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const bgLightGrey = grey[400];
const bgDarkGrey = grey[700];
const textLightGrey = grey[700];
const textDarkGrey = grey[800];

export const ParentFlexContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "20px",
}));

export const LogoText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: "bold",
  padding: "8px 90px 8px 36px",
  backgroundColor: bgLightGrey,
  color: textDarkGrey,
  alignItems: "center",
  fontSize: "20px",
  cursor: "pointer",
}));

export const SearchFieldStyle = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: bgDarkGrey,
    width: "40%",
    color: "white",
    padding: "6px 0px",
    borderBottom: "none",
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
  })
);

export const RightMenuContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  padding: "10px 4px",
  gap: 48,
}));

export const RightMenuItemOne = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textLightGrey,
    fontWeight: "bold",
    padding: "8px",
    cursor: "pointer",
  })
);

export const RightMenuItemTwo = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textLightGrey,
    fontWeight: "bold",
    padding: "8px 10px",
    backgroundColor: bgLightGrey,
    borderRadius: "5px",
    cursor: "pointer",
  })
);
