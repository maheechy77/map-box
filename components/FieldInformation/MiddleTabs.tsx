import React from "react";
import {
  FieldDataButton,
  MyFieldButton,
  SmallButton,
} from "./FieldInformation.style";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

const MiddleTabs: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <MyFieldButton>My Field</MyFieldButton>
      </Grid>
      <Grid item xs={3}>
        <FieldDataButton>Field Data</FieldDataButton>
      </Grid>
      <Grid item xs={1}>
        <SmallButton>Field Monitor</SmallButton>
      </Grid>
      <Grid item xs={1}>
        <SmallButton>Field Insights</SmallButton>
      </Grid>
      <Grid item xs={1}>
        <SmallButton>Field Notes</SmallButton>
      </Grid>
      <Grid item xs={1}>
        <SmallButton>Share Status</SmallButton>
      </Grid>
    </Grid>
  );
};
export default MiddleTabs;
