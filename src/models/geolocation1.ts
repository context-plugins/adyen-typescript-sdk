import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geographicCoordinatesSchema, type GeographicCoordinates } from "./geographic-coordinates.js";
import { utmCoordinatesSchema, type UtmCoordinates } from "./utm-coordinates.js";

export type Geolocation1 = {
  geographicCoordinates?: GeographicCoordinates;
  utmCoordinates?: UtmCoordinates;
};

export const geolocation1Schema: Schema<Geolocation1> = s.object<Geolocation1>({
  geographicCoordinates: s.optional(s.lazy(() => geographicCoordinatesSchema)),
  utmCoordinates: s.optional(s.lazy(() => utmCoordinatesSchema)),
  _keysMap: {
    geographicCoordinates: "GeographicCoordinates",
    utmCoordinates: "UTMCoordinates",
  },
});
