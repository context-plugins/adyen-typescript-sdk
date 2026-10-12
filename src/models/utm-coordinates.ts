import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UtmCoordinates = {
  /**
   * UTM grid zone combination of the longitude zone (1 to 60) and the latitude band (C to X,
   * excluding I and O).
   */
  utmZone: string;
  /** X-coordinate of the Universal Transverse Mercator coordinate system. */
  utmEastward: string;
  /** Y-coordinate of the Universal Transverse Mercator coordinate system. */
  utmNorthward: string;
};

export const utmCoordinatesSchema: Schema<UtmCoordinates> = s.object<UtmCoordinates>({
  utmZone: s.string(),
  utmEastward: s.string(),
  utmNorthward: s.string(),
  _keysMap: {
    utmZone: "UTMZone",
    utmEastward: "UTMEastward",
    utmNorthward: "UTMNorthward",
  },
});
