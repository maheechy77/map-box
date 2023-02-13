import type { FillLayer } from "react-map-gl";

export const dataLayer: FillLayer = {
  id: "allData",
  type: "fill",
  source: "mapbox",
  paint: {
    "fill-color": "#4E3FC8",
    "fill-opacity": 0.8,
  },
};
