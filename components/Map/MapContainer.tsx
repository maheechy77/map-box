import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Map, { Source, Layer } from "react-map-gl";
import {
  MapMenuContainer,
  MapMenuItemsText,
  MapSubMenuItems,
  MapSubMenuItemsText,
} from "./MapContainer.style";
import { dataLayer } from "./MapLayer";

const MapContainer: React.FC = () => {
  const [allData, setAllData] = useState<string | undefined>();

  useEffect(() => {
    const response = fetch(
      `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson`
    )
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err));
  }, [allData]);
  //
  return (
    <Box>
      <MapMenuContainer>
        <Box sx={{ position: "relative", zIndex: 20 }}>
          <MapMenuItemsText variant="h6">Field</MapMenuItemsText>
          <MapSubMenuItems
            sx={{ padding: "12px 16px 20px", left: "-24px", width: "auto" }}
          >
            <MapSubMenuItemsText>Add</MapSubMenuItemsText>
            <MapSubMenuItemsText>Edit</MapSubMenuItemsText>
            <MapSubMenuItemsText>Import</MapSubMenuItemsText>
          </MapSubMenuItems>
        </Box>

        <Box sx={{ position: "relative", zIndex: 20 }}>
          <MapMenuItemsText variant="h6">Water Management</MapMenuItemsText>
          <MapSubMenuItems>
            <MapSubMenuItemsText>Pump</MapSubMenuItemsText>
            <MapSubMenuItemsText>TDI</MapSubMenuItemsText>
            <MapSubMenuItemsText>Tile Maps</MapSubMenuItemsText>
            <MapSubMenuItemsText>Assesments</MapSubMenuItemsText>
          </MapSubMenuItems>
        </Box>

        <Box sx={{ position: "relative", zIndex: 20 }}>
          <MapMenuItemsText variant="h6">Analysis</MapMenuItemsText>
          <MapSubMenuItems sx={{ width: "150px" }}>
            <MapSubMenuItemsText>Yields</MapSubMenuItemsText>
            <MapSubMenuItemsText>Soil</MapSubMenuItemsText>
            <MapSubMenuItemsText>Plant Dates</MapSubMenuItemsText>
          </MapSubMenuItems>
        </Box>
      </MapMenuContainer>
      <Box sx={{ textAlign: "center", height: "400px" }}>
        <Map
          mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
          }}
          style={{ width: "100%", height: "400px", zIndex: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Source type="geojson" data={allData}>
            <Layer {...dataLayer} />
          </Source>
        </Map>
      </Box>
    </Box>
  );
};
export default MapContainer;
