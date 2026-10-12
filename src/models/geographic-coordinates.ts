import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeographicCoordinates = {
  /** Angular distance of a location on the earth south or north of the equator. */
  latitude: string;
  /**
   * Angular measurement of the distance of a location on the earth east or west of the Greenwich
   * observatory.
   */
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
