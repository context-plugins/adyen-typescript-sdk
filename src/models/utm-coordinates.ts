import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UtmCoordinates = {
  utmZone: string;
  utmEastward: string;
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
