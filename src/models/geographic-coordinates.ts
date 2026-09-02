import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeographicCoordinates = {
  latitude: string;
  longitude: string;
};

export const geographicCoordinatesSchema: Schema<GeographicCoordinates> = s.object<GeographicCoordinates>({
  latitude: s.string(),
  longitude: s.string(),
  _keysMap: {
    latitude: "Latitude",
    longitude: "Longitude",
  },
});
