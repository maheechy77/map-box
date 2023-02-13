import { grey } from "@mui/material/colors";
import { Box, BoxProps } from "@mui/system";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const bgLightGrey = grey[300];
const bgMediumGrey = grey[400];
const bgDarkGrey = grey[700];
const textLightGrey = grey[600];
const textDarkGrey = grey[800];

export const FieldInfoContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const TopTabContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "20px",
  backgroundColor: bgDarkGrey,
  height: "60px",
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
}));

export const TopTabLeftContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "20px",
  gap: "10px",
  marginLeft: "24px",
}));

export const TopTabRightContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "20px",
  gap: "20px",
}));

export const FieldInfoText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 0px",
  })
);

export const RequestServiceButton = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: bgLightGrey,
    color: textDarkGrey,
    fontSize: "18px",
    fontWeight: "bold",
    padding: "6px 14px",
    marginRight: "6px",
  })
);

export const MyFieldButton = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: bgMediumGrey,
    color: textDarkGrey,
    fontSize: "18px",
    fontWeight: "bold",
    padding: "6px",
  })
);

export const FieldDataButton = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    backgroundColor: bgLightGrey,
    color: textDarkGrey,
    fontSize: "18px",
    fontWeight: "bold",
    padding: "6px",
  })
);

export const SmallButton = styled(Typography)<TypographyProps>(({ theme }) => ({
  backgroundColor: bgLightGrey,
  color: textDarkGrey,
  fontSize: "18px",
  fontWeight: "bold",
  padding: "6px",
  textAlign: "center",
}));

export const BottomTabContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
  height: "auto",
  gap: "24px",
}));

export const ListView = styled(Typography)<TypographyProps>(({ theme }) => ({
  backgroundColor: bgLightGrey,
  color: textDarkGrey,
  fontSize: "18px",
  fontWeight: "bold",
  padding: "6px",
  flexGrow: 1,
  height: "35vh",
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Classification = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: bgLightGrey,
  padding: "5px",
  flexGrow: 1,
  height: "35vh",
  marginTop: "12px",
  display: "flex",
}));

export const ClassificationInnerContiner = styled(Box)<BoxProps>(
  ({ theme }) => ({
    backgroundColor: bgLightGrey,
    padding: "20px 40px",
    flexGrow: 1,
    height: "90%",
    marginTop: "12px",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    position: "relative",
  })
);

export const ClassificationBoldText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textDarkGrey,
    fontSize: "20px",
    fontWeight: "bold",
    margin: "8px 0",
  })
);

export const ClassificationText = styled(Typography)<TypographyProps>(
  ({ theme }) => ({
    color: textLightGrey,
    fontSize: "18px",
    fontWeight: "600",
    margin: "8px 0",
  })
);

export const Data = styled(Typography)<TypographyProps>(({ theme }) => ({
  backgroundColor: bgDarkGrey,
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "6px",
  height: "35vh",
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const VerticalLine = styled(Box)<BoxProps>(({ theme }) => ({
  height: "90%",
  position: "absolute",
}));
