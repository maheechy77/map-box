import React from "react";
import { Box } from "@mui/system";
import {
  Classification,
  ClassificationBoldText,
  ClassificationInnerContiner,
  ClassificationText,
  Data,
  ListView,
  VerticalLine,
} from "./FieldInformation.style";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Grid from "@mui/material/Grid";

const BottomTabs: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <ListView>Field List Dropdown View</ListView>
      </Grid>
      <Grid item xs={3}>
        <Classification>
          <ClassificationInnerContiner>
            <VerticalLine
              sx={{
                width: "4px",
                bgcolor: "#b3b3b3",
                right: "0px",
              }}
            />
            <ClassificationBoldText>
              Drainage Classification
            </ClassificationBoldText>
            <ClassificationText>Soil</ClassificationText>
            <ClassificationText>Tile</ClassificationText>
            <ClassificationText>Yield</ClassificationText>
            <ClassificationText>Wetland</ClassificationText>
          </ClassificationInnerContiner>
          <ClassificationInnerContiner>
            <ClassificationText>Weather</ClassificationText>
            <ClassificationText>Crop History</ClassificationText>
            <ClassificationText>Hail History</ClassificationText>
            <ClassificationText>NDVI</ClassificationText>
          </ClassificationInnerContiner>
        </Classification>
      </Grid>
      <Grid sx={{ position: "relative" }} item xs={4}>
        <VerticalLine
          sx={{
            width: "6px",
            bgcolor: "white",
            bottom: "4px",
            right: "10px",
          }}
        />
        <Data>
          Data, Graph & Table
          <ZoomOutMapIcon
            style={{ position: "absolute", bottom: "4px", right: "22px" }}
          />
        </Data>
      </Grid>
    </Grid>
  );
};
export default BottomTabs;
